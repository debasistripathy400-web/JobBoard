from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import CustomUser, SeekerProfile, EmployerProfile
from .serializers import RegisterSerializer, UserSerializer, SeekerProfileSerializer, EmployerProfileSerializer

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer

class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_serializer_class(self):
        if self.request.user.role == 'seeker':
            return SeekerProfileSerializer
        return EmployerProfileSerializer

    def get_object(self):
        if self.request.user.role == 'seeker':
            return SeekerProfile.objects.get_or_create(user=self.request.user)[0]
        return EmployerProfile.objects.get_or_create(user=self.request.user)[0]

class SeekerListView(generics.ListAPIView):
    queryset = SeekerProfile.objects.all()
    serializer_class = SeekerProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)

class EmployerListView(generics.ListAPIView):
    queryset = EmployerProfile.objects.all()
    serializer_class = EmployerProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)
