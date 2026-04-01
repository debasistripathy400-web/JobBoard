from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Application
from jobs.models import Job
from notifications.models import Notification

@login_required
def dashboard(request):
    if not request.user.is_job_seeker:
        return render(request, '403.html')
    applications = request.user.job_seeker_profile.applications.select_related('job', 'job__employer')
    return render(request, 'applications/dashboard.html', {'applications': applications})

@login_required
def apply_job(request, job_id):
    if not request.user.is_job_seeker:
        return render(request, '403.html')
        
    job = get_object_or_404(Job, id=job_id, is_active=True)
    profile = request.user.job_seeker_profile
    
    # Check if already applied
    if Application.objects.filter(job=job, applicant=profile).exists():
        messages.warning(request, 'You have already applied for this job.')
        return redirect('jobs:job_detail', pk=job.id)
        
    if request.method == 'POST':
        # Create application
        Application.objects.create(job=job, applicant=profile)
        
        # Notify employer
        Notification.objects.create(
            user=job.employer.user,
            message=f"{request.user.username} applied for {job.title}",
        )
        
        messages.success(request, 'Application submitted successfully!')
        return redirect('jobs:job_detail', pk=job.id)
        
    return redirect('jobs:job_detail', pk=job.id)

@login_required
def update_status(request, app_id, status):
    if request.method == 'POST' and request.user.is_employer:
        application = get_object_or_404(Application, id=app_id, job__employer=request.user.employer_profile)
        if status in ['Accepted', 'Rejected']:
            application.status = status
            application.save()
            
            # Notify Job Seeker
            Notification.objects.create(
                user=application.applicant.user,
                message=f"Your application for {application.job.title} has been {status}.",
            )
            messages.success(request, f'Application status updated to {status}.')
        return redirect('jobs:job_applicants', pk=application.job.id)
    return redirect('jobs:employer_dashboard')
