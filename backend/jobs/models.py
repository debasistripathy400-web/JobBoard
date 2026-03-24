from django.db import models
from users.models import CustomUser, EmployerProfile

class Job(models.Model):
    JOB_TYPE_CHOICES = (
        ('full_time', 'Full-time'),
        ('part_time', 'Part-time'),
        ('contract', 'Contract'),
        ('freelance', 'Freelance'),
        ('internship', 'Internship'),
    )

    employer = models.ForeignKey(EmployerProfile, on_delete=models.CASCADE, related_name='jobs')
    title = models.CharField(max_length=255)
    description = models.TextField()
    requirements = models.TextField()
    salary_range = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=20, choices=JOB_TYPE_CHOICES, default='full_time')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Application(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('shortlisted', 'Shortlisted'),
        ('rejected', 'Rejected'),
        ('accepted', 'Accepted'),
    )

    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    seeker = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='applications')
    resume_snapshot = models.FileField(upload_to='application_resumes/', null=True, blank=True)
    cover_letter = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    applied_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('job', 'seeker')

    def __str__(self):
        return f"{self.seeker.email} applied for {self.job.title}"

class SavedJob(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='saved_jobs')
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='saved_by')
    saved_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'job')
