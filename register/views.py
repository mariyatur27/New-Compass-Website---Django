from django.shortcuts import render, redirect
from . import forms


# Create your views here.

# students can sign up here
def studentSignUp(response):
    if response.method == "POST":
        form = forms.StudentRegisterForm(response.POST)

        if form.is_valid():
            form.save()

        return redirect('home/')  # ToDO
    else:
        form = forms.StudentRegisterForm()
    return render(response, "register/studentSignUp.html", {'form': form})


# tutors can sign up here
def tutorSignUp(response):
    pass

