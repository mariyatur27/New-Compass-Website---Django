from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def homePage(response):
    return render(response, "main/homePage.html", {})


def aboutUs(response):
    return render(response, "main/aboutUs.html", {})
