from django.shortcuts import render
from .models import Post

def home(request):
    posts = {
        'posts' : Post.objects.all()
    }
    return render(request, 'first/posts.html')

def posts(request):
    novo_post = Post()
    novo_post.title = request.POST.get('title')
    novo_post.text = request.POST.get('text')
    novo_post.save()
    
    posts = {
        'posts' : Post.objects.all()
    }
    return render(request,'first/posts.html')

def first(request):
    return render(request, 'first/first.html')
