from turtle import width
from django.forms import ModelForm
from django import forms 
from .models import TutorInfo

# Creating a tutor signup form
class tutorRegForm(ModelForm):
    class Meta:
        model = TutorInfo
        fields = "__all__"