# Generated by Django 4.0.5 on 2022-06-25 23:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0008_rename_username_paymenthistory_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymenthistory',
            name='amount',
            field=models.FloatField(editable=False, max_length=6),
        ),
        migrations.AlterField(
            model_name='paymenthistory',
            name='amount_plus_tax',
            field=models.FloatField(editable=False, max_length=6),
        ),
        migrations.AlterField(
            model_name='paymenthistory',
            name='card_number',
            field=models.CharField(editable=False, max_length=12),
        ),
        migrations.AlterField(
            model_name='paymenthistory',
            name='user',
            field=models.OneToOneField(editable=False, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]