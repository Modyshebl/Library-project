from django.shortcuts import render, get_object_or_404
from .models import Book

def home(request):
    if 'searchbar' in request.GET:
        q = request.GET['searchbar']
        books = Book.objects.filter(title__icontains = q)
    else :
        books = Book.objects.all()
    return render(request, 'home.html', {'books': books})

def bookPage(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    return render(request, 'books/bookPage.html', {'book': book})
