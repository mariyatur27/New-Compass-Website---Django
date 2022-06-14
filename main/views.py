from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def homePage(response):
    return HttpResponse('home page')


def aboutUs(response):
    return HttpResponse('about us')
