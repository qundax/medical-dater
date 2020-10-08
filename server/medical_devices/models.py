from django.db import models

# Create your models here.
class Category(models.Model):
  name = models.CharField(max_length=250)

  def __str__(self):
    return self.name  

class MedicalDevice(models.Model):
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  name = models.CharField(max_length=250)
  duration = models.CharField(max_length=100)
  image_src = models.TextField()
  
  def __str__(self):
    return self.name