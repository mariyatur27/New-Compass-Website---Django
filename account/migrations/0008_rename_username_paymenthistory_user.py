# Generated by Django 4.0.5 on 2022-06-25 23:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_rename_user_paymenthistory_username'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paymenthistory',
            old_name='username',
            new_name='user',
        ),
    ]
