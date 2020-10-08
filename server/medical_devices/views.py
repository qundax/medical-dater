from django.shortcuts import render
from rest_framework import generics
from .models import Category, MedicalDevice
from .serializers import CategorySerializer, MedicalDeviceSerializer

# Create your views here.
class ListMedicalDevice(generics.ListCreateAPIView):
  queryset = MedicalDevice.objects.all()
  serializer_class = MedicalDeviceSerializer

class ShowMedicalDevice(generics.RetrieveUpdateDestroyAPIView):
  queryset = MedicalDevice.objects.all()
  serializer_class = MedicalDeviceSerializer

class ListCategory(generics.ListCreateAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer