from django.db import models

class UserInfo(models.Model):
    email = models.CharField(max_length=1000)
    comments = models.CharField(max_length=20000)
