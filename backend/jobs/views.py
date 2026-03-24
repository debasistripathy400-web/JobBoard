from rest_framework import generics, permissions, filters, status
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Job, Application, SavedJob
from .serializers import JobSerializer, ApplicationSerializer, SavedJobSerializer
from users.models import EmployerProfile

class IsEmployer(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'employer'

class JobListView(generics.ListCreateAPIView):
    queryset = Job.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = JobSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['location', 'job_type', 'salary_range']
    search_fields = ['title', 'description', 'requirements']
    ordering_fields = ['created_at', 'salary_range']

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsEmployer()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        employer_profile = EmployerProfile.objects.get(user=self.request.user)
        serializer.save(employer=employer_profile)

class JobDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [IsEmployer()]
        return [permissions.AllowAny()]

class ApplicationCreateView(generics.CreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(seeker=self.request.user)

class EmployerApplicationsListView(generics.ListAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [IsEmployer]

    def get_queryset(self):
        return Application.objects.filter(job__employer__user=self.request.user)
