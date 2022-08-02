from django.db import models


# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=400, unique=True)


class Salesperson(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)


class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20, unique=True)


class SalesRecord(models.Model):
    salesperson = models.ForeignKey(Salesperson, related_name="saleshistory", on_delete=models.PROTECT)
    customer = models.ForeignKey(Customer, related_name="saleshistory", on_delete=models.PROTECT)
    sale_price = models.FloatField()
    automobile = models.ForeignKey(AutomobileVO, related_name="saleshistory", on_delete=models.PROTECT)


