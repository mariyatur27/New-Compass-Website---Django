# Generated by Django 4.0.5 on 2022-06-26 00:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0010_alter_paymenthistory_amount_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymenthistory',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
