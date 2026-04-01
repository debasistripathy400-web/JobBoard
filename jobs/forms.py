from django import forms
from .models import Job, Category

class JobForm(forms.ModelForm):
    class Meta:
        model = Job
        fields = ['title', 'category', 'description', 'location', 'salary_range', 'job_type', 'is_active']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 4}),
        }
