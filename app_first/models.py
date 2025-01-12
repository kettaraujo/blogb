from django.db import models

# Create your models here.
class Post (models.Model):
    id_post = models.AutoField(primary_key=True)
    title = models.TextField(max_length=140)
    text = models.TextField(max_length=700)
