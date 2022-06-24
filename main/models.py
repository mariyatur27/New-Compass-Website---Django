from django.db import models
from django.forms import PasswordInput
from django import forms

# Create your models here.
class TutorInfo(models.Model):
    #how do i add placeholders instead of titles here?
    tutor_name = models.CharField('Your name', max_length = 50)
    tutor_email = models.EmailField('Your work email', max_length = 50)
    tutor_phone = models.CharField('Your phone number', max_length = 20)
    tutor_password = models.CharField('Your password', max_length = 100)
