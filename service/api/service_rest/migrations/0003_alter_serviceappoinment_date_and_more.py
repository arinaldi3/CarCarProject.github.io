# Generated by Django 4.0.3 on 2022-08-01 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_serviceappoinment_finished_serviceappoinment_vip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceappoinment',
            name='date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='serviceappoinment',
            name='time',
            field=models.TimeField(null=True),
        ),
    ]
