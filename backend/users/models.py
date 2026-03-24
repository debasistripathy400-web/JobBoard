from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(_('The Email field must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'admin')

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('seeker', 'Job Seeker'),
        ('employer', 'Employer'),
        ('admin', 'Admin'),
    )
    
    username = None
    email = models.EmailField(_('email address'), unique=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='seeker')
    profile_picture = models.ImageField(upload_to='profiles/', null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

class SeekerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='seeker_profile')
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    skills = models.TextField(null=True, blank=True) # Could be many-to-many later
    experience = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.user.email}'s Seeker Profile"

class EmployerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='employer_profile')
    company_name = models.CharField(max_length=255)
    company_description = models.TextField(null=True, blank=True)
    company_website = models.URLField(null=True, blank=True)
    company_logo = models.ImageField(upload_to='company_logos/', null=True, blank=True)
    
    def __str__(self):
        return self.company_name
