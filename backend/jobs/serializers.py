from rest_framework import serializers
from .models import Job, Application, SavedJob
from users.serializers import EmployerProfileSerializer, UserSerializer

class JobSerializer(serializers.ModelSerializer):
    employer = EmployerProfileSerializer(read_only=True)
    
    class Meta:
        model = Job
        fields = '__all__'

class ApplicationSerializer(serializers.ModelSerializer):
    seeker = UserSerializer(read_only=True)
    
    class Meta:
        model = Application
        fields = '__all__'

class SavedJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedJob
        fields = '__all__'
