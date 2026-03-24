from rest_framework import serializers
from .models import CustomUser, SeekerProfile, EmployerProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'role', 'phone_number', 'profile_picture')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'role')

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data.get('role', 'seeker')
        )
        # Create profile based on role
        if user.role == 'seeker':
            SeekerProfile.objects.create(user=user)
        elif user.role == 'employer':
            EmployerProfile.objects.create(user=user)
        return user

class SeekerProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = SeekerProfile
        fields = '__all__'

class EmployerProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = EmployerProfile
        fields = '__all__'
