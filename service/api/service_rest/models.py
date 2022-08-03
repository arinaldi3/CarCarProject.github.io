from operator import truediv
from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=100)

class Technician(models.Model):
    technician_name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)

class ServiceAppoinment(models.Model):
    vin = models.CharField(max_length=50)
    customer_name = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now=True, null=True)
    time = models.TimeField(null=True)
    technician = models.ForeignKey( 'Technician', related_name="appointment", on_delete=models.PROTECT)
    reason = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)