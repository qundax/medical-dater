from rest_framework import serializers
from .models import Category, MedicalDevice

class MedicalDeviceSerializer(serializers.ModelSerializer):
  class Meta:
    model = MedicalDevice
    fields = ['id', 'category', 'name', 'duration', 'image_src']

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = ['id', 'name']