from django.urls import path
from . import views

urlpatterns = [
    path('devices/', views.ListMedicalDevice.as_view(), name='index'),
    path('devices/<int:pk>/', views.ShowMedicalDevice.as_view(), name='show'),
    path('categories/', views.ListCategory.as_view(), name='categories'),
]

