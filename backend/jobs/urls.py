from django.urls import path
from .views import JobListView, JobDetailView, ApplicationCreateView, EmployerApplicationsListView

urlpatterns = [
    path('', JobListView.as_view(), name='job_list'),
    path('<int:pk>/', JobDetailView.as_view(), name='job_detail'),
    path('apply/', ApplicationCreateView.as_view(), name='job_apply'),
    path('employer/applications/', EmployerApplicationsListView.as_view(), name='employer_applications'),
]
