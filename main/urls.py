from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('home/', views.homePage, name="homePage"),
    path('about-us/', views.aboutUs, name="aboutUs"),
]