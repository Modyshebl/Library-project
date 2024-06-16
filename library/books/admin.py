from django.contrib import admin
from .models import Book

# Register your models here.

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'isbn', 'title', 'authors', 'genre', 'publication_year', 'description', 'cover', 'active')
