from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('home-tutors/', views.homePage_tutors, name="homePage_tutors"),
    path('home-students/', views.homePage_students, name="homePage_students"),
]