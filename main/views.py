from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def homePage_tutors(response):
    return render(response, "main/homePage_tutors.html", {})


def homePage_students(response):
    return render(response, "main/homePage_students.html", {})
