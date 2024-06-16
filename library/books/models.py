from django.db import models

# Create your models here.
class Book(models.Model):
    id = models.AutoField(primary_key=True)
    isbn = models.CharField(max_length=25)
    title = models.CharField(max_length=100)
    authors = models.CharField(max_length=170)
    genre = models.CharField(max_length=100)
    publication_year = models.IntegerField()
    description = models.TextField()
    cover = models.ImageField()
    active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['id']