# Generated by Django 4.0.5 on 2022-06-25 23:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_alter_paymenthistory_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='paymenthistory',
            name='amount_plus_tax',
            field=models.FloatField(default='123', max_length=6),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='paymenthistory',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
