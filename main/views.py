from django.shortcuts import render
from django.http import HttpResponse
from .forms import tutorRegForm
from .models import TutorInfo
from django.http import HttpResponseRedirect

# Create your views here.
def tutor_signup(request):
    submitted = False
    if request.method == 'POST':
        form = tutorRegForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('tutor-signup?submitted=True')
            # return tutor_dashboard()
    else:
        form = tutorRegForm
        if 'submitted' in request.GET:
            submitted = True
    return render(request, 'main/tutors/signup.html', {'form':form, 'submitted': submitted})

def homePage_tutors(response):
    return render(response, "main/homePage_tutors.html", {})

def homePage_students(response):
    return render(response, "main/homePage_students.html", {})


def tutor_dashboard(response):
    return render(response, "main/tutors/dashboard.html", {})


def payment_history(response):
    return render(response, "main/tutors/payment_history.html", {})


def student_portfolio(response):
    return render(response, "main/tutors/student_portfolio.html", {})


def time_table(response):
    return render(response, "main/tutors/time_table.html", {})


def hour_logbook(response):
    return render(response, "main/tutors/hour_logbook.html", {})
