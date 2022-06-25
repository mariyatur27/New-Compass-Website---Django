from django.shortcuts import render, redirect


# Create your views here.

def userProfile(response):
    if response.user.is_authenticated:
        if response.user.type == 'STUDENT':
            return render(response, "account/studentProfile.html", {})

        elif response.user.type == 'TUTOR':
            return render(response, "account/tutorProfile.html", {})

    else:
        return redirect('/login/')
