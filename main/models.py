from django.db import models
from django.forms import PasswordInput


# Create your models here.
class TutorInfo(models.Model):
    tutor_name = models.CharField('Your full name', max_length = 200)
    tutor_email = models.EmailField('Your work email', max_length = 50)
    tutor_phone = models.CharField('Your phone number', max_length = 20)
    tutor_password = models.CharField('Your password', max_length = 100)
