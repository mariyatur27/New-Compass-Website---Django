from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.homePage, name="homePage"),
    path('tutors/', views.tutors, name="homePage_tutors"),
    path('students/', views.students, name="homePage_students"),
    # path('tutors/dashboard/', views.tutor_dashboard , name='dashboard_tutors'),
    # path('tutors/student-portfolios', views.student_portfolio, name='student_portfolio'),
    # path('tutors/payment-history', views.payment_history, name='payment_history'),
    # path('tutors/timetable', views.time_table, name='time_table'),
    # path('tutors/hour-logbook', views.hour_logbook, name='hour_logbook'),
    # path('tutors/signup', views.tutor_signup, name='tutor-signup')
]
