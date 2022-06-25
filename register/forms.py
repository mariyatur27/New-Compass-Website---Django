from django import forms
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from account.models import Account


class StudentRegisterForm(UserCreationForm):
    email = forms.EmailField()
    type = forms.ChoiceField(
        choices=[('STUDENT', 'STUDENT'), ('TUTOR', 'TUTOR')]
    )

    class Meta:
        model = Account
        fields = ["username", "email", "type", "password1", "password2"]
