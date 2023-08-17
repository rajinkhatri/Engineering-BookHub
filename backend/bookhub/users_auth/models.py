from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='faculty_images/')

    def __str__(self):
        return self.name
    
class BooksYear1(models.Model):
    name = models.CharField(max_length=200)
    # image = models.ImageField(upload_to='Book_images/')
    author = models.CharField(max_length=200)
    date = models.DateField(max_length=200)
    edition = models.CharField(max_length=200)
    publisher = models.CharField(max_length=200)


    def __str__(self):
        return self.name

# Create your models here.
