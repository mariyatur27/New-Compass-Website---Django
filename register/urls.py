from django.urls import path
from . import views

urlpatterns = [
    path('student-sign-up/', views.studentSignUp, name='studentSignUp'),
    path('tutor-sign-up', views.tutorSignUp, name='tutorSignUp'),
]
