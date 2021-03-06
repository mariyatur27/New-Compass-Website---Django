from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


# Create your user models here.

class MyAccountManager(BaseUserManager):
    def create_user(self, username, email, type, password=None):
        if not username:
            raise ValueError("users must have a username")
        if not email:
            raise ValueError("users must have an email")
        if not type:
            raise ValueError("all accounts must have a type")

        user = self.model(
            username=username,
            email=self.normalize_email(email),
            type=type,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, type, password):
        user = self.create_user(
            username=username,
            email=self.normalize_email(email),
            type=type,
            password=password,
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    # required
    objects = MyAccountManager()
    username = models.CharField(max_length=30, unique=True)
    date_joined = models.DateTimeField(verbose_name='date_joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last_login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    # optional
    email = models.EmailField(verbose_name="email", max_length=60, unique=True, db_index=True)
    type = models.CharField(max_length=7, choices=[('STUDENT', 'STUDENT'), ('TUTOR', 'TUTOR'), ('ADMIN', 'ADMIN')])

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'type']

    def __str__(self):
        return self.username

    def get_type(self):
        return self.type

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


class PaymentHistory(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE)
    card_number = models.CharField(max_length=12)
    amount = models.FloatField(max_length=6)
    amount_plus_tax = models.FloatField(max_length=6)
    date = models.DateTimeField(auto_now_add=True)
