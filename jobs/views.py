from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db.models import Q
from .models import Job, Category
from .forms import JobForm

def landing_page(request):
    featured_jobs = Job.objects.filter(is_active=True).select_related('employer', 'category')[:6]
    categories = Category.objects.all()
    return render(request, 'jobs/landing.html', {
        'featured_jobs': featured_jobs,
        'categories': categories
    })

def job_list(request):
    jobs = Job.objects.filter(is_active=True).select_related('employer', 'category')
    query = request.GET.get('q')
    location = request.GET.get('location')
    category_id = request.GET.get('category')
    
    if query:
        jobs = jobs.filter(
            Q(title__icontains=query) |
            Q(description__icontains=query) |
            Q(employer__company_name__icontains=query)
        )
    if location:
        jobs = jobs.filter(location__icontains=location)
    
    if category_id:
        jobs = jobs.filter(category_id=category_id)
        
    return render(request, 'jobs/job_list.html', {
        'jobs': jobs, 
        'query': query, 
        'location_query': location,
        'categories': Category.objects.all(),
        'selected_category': int(category_id) if category_id and category_id.isdigit() else None
    })

def job_detail(request, pk):
    job = get_object_or_404(Job, pk=pk, is_active=True)
    has_applied = False
    if request.user.is_authenticated and hasattr(request.user, 'is_job_seeker') and request.user.is_job_seeker:
        if hasattr(request.user, 'job_seeker_profile'):
            has_applied = job.applications.filter(applicant=request.user.job_seeker_profile).exists()
    return render(request, 'jobs/job_detail.html', {'job': job, 'has_applied': has_applied})

@login_required
def employer_dashboard(request):
    if not hasattr(request.user, 'is_employer') or not request.user.is_employer:
        return render(request, '403.html')
    
    # Ensure profile exists (fail-safe)
    if not hasattr(request.user, 'employer_profile'):
        from accounts.models import EmployerProfile
        EmployerProfile.objects.get_or_create(user=request.user)
        
    jobs = request.user.employer_profile.jobs.all()
    return render(request, 'jobs/employer_dashboard.html', {'jobs': jobs})

@login_required
def job_create(request):
    if not hasattr(request.user, 'is_employer') or not request.user.is_employer:
        return render(request, '403.html')
        
    # Ensure profile exists (fail-safe)
    if not hasattr(request.user, 'employer_profile'):
        from accounts.models import EmployerProfile
        EmployerProfile.objects.get_or_create(user=request.user)
        
    if request.method == 'POST':
        form = JobForm(request.POST)
        if form.is_valid():
            job = form.save(commit=False)
            job.employer = request.user.employer_profile
            job.save()
            messages.success(request, 'Job successfully created!')
            return redirect('jobs:employer_dashboard')
    else:
        form = JobForm()
    
    return render(request, 'jobs/job_form.html', {'form': form, 'title': 'Post a New Job'})

@login_required
def job_edit(request, pk):
    if not hasattr(request.user, 'is_employer') or not request.user.is_employer:
        return render(request, '403.html')
    
    job = get_object_or_404(Job, pk=pk, employer=request.user.employer_profile)
    
    if request.method == 'POST':
        form = JobForm(request.POST, instance=job)
        if form.is_valid():
            form.save()
            messages.success(request, 'Job updated successfully!')
            return redirect('jobs:employer_dashboard')
    else:
        form = JobForm(instance=job)
    
    return render(request, 'jobs/job_form.html', {'form': form, 'title': f'Edit Job: {job.title}', 'is_edit': True})

@login_required
def toggle_job_status(request, pk):
    if not hasattr(request.user, 'is_employer') or not request.user.is_employer:
        return render(request, '403.html')
    
    job = get_object_or_404(Job, pk=pk, employer=request.user.employer_profile)
    job.is_active = not job.is_active
    job.save()
    
    status = "Active" if job.is_active else "Inactive"
    messages.success(request, f'Job listing is now {status}!')
    return redirect('jobs:employer_dashboard')

@login_required
def job_applicants(request, pk):
    if not hasattr(request.user, 'is_employer') or not request.user.is_employer:
        return render(request, '403.html')
        
    job = get_object_or_404(Job, pk=pk, employer=request.user.employer_profile)
    applications = job.applications.select_related('applicant__user').all()
    
    return render(request, 'jobs/job_applicants.html', {'job': job, 'applications': applications})
