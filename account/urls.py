from . import views
from django.urls import path, include


urlpatterns = [
    path('profile/', views.userProfile, name='userProfile'),
]