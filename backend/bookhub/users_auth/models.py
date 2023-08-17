from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='faculty_images/')

    def __str__(self):
        return self.name

# Create your models here.
