from django.urls import path
from . import views

app_name = 'applications'

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('apply/<int:job_id>/', views.apply_job, name='apply_job'),
    path('update-status/<int:app_id>/<str:status>/', views.update_status, name='update_status'),
]
