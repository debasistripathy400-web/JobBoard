from django.urls import path
from . import views

app_name = 'jobs'

urlpatterns = [
    path('', views.landing_page, name='landing'),
    path('jobs/', views.job_list, name='list'),
    path('job/<int:pk>/', views.job_detail, name='job_detail'),
    path('employer/dashboard/', views.employer_dashboard, name='employer_dashboard'),
    path('employer/job/add/', views.job_create, name='job_create'),
    path('employer/job/<int:pk>/edit/', views.job_edit, name='job_edit'),
    path('employer/job/<int:pk>/toggle/', views.toggle_job_status, name='job_toggle'),
    path('employer/job/<int:pk>/applicants/', views.job_applicants, name='job_applicants'),
]
