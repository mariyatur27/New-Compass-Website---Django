from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import Account, PaymentHistory


class AccountAdmin(UserAdmin):
    list_display = ('username', 'email',)
    search_fields = ('username', 'email',)
    readonly_fields = ('date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Account, AccountAdmin)
admin.site.register(PaymentHistory)
