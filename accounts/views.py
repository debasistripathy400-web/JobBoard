from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib import messages
from .forms import JobSeekerSignUpForm, EmployerSignUpForm

def register(request):
    return render(request, 'accounts/register.html')

def job_seeker_register(request):
    if request.method == 'POST':
        form = JobSeekerSignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registration successful. Welcome!')
            return redirect('jobs:list') # Placeholder, will be dashboard later
    else:
        form = JobSeekerSignUpForm()
    return render(request, 'accounts/register_form.html', {'form': form, 'title': 'Job Seeker Registration'})

def employer_register(request):
    if request.method == 'POST':
        form = EmployerSignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registration successful. Welcome to JobBoard Employer Portal!')
            return redirect('jobs:list') # Placeholder
    else:
        form = EmployerSignUpForm()
    return render(request, 'accounts/register_form.html', {'form': form, 'title': 'Employer Registration'})

def profile(request):
    if not request.user.is_authenticated:
        return redirect('accounts:login')
    
    if request.user.is_job_seeker:
        if request.method == 'POST':
            from .forms import JobSeekerProfileForm
            form = JobSeekerProfileForm(request.POST, request.FILES, instance=request.user.job_seeker_profile)
            if form.is_valid():
                form.save()
                messages.success(request, 'Profile updated successfully!')
                return redirect('accounts:profile')
        else:
            from .forms import JobSeekerProfileForm
            form = JobSeekerProfileForm(instance=request.user.job_seeker_profile)
        return render(request, 'accounts/profile.html', {'form': form})
    
    # Can implement employer profile similarly
    return render(request, '403.html')
