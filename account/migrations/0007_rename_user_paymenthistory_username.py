# Generated by Django 4.0.5 on 2022-06-25 23:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_paymenthistory_amount_plus_tax_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paymenthistory',
            old_name='user',
            new_name='username',
        ),
    ]