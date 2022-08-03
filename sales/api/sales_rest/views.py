# from django.shortcuts import render
from .models import SalesRecord, Salesperson, AutomobileVO, Customer
from common.json import ModelEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phone_number", "id"]


class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["name", "employee_number"]


class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["salesperson", "sale_price", "customer", "automobile"]
    encoders = {
        "salesperson": SalespersonListEncoder(),
        "automobile": AutomobileVOEncoder(),
        "customer": CustomerListEncoder(),
    }

    # def get_extra_data(self, o):
    #     return {
    #         "salesperson": {
    #             "employee_number": o.salesperson.employee_number,
    #             "name": o.salesperson.name
    #         },
    #         "automobile": o.automobile.vin,
    #         "customer": o.salesperson.name,
        # }


class SalesRecordDetailEncoder(ModelEncoder):
    model = SalesRecord 
    properties = ["id", "sale_price", "automobile", "salesperson", "customer"]
    encoders = {
        "salesperson": SalespersonListEncoder(),
        "automobile": AutomobileVOEncoder(),
        "customer": CustomerListEncoder(),
    }



@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse({"salespeople": salespeople}, encoder=SalespersonListEncoder)
    else:
        content = json.loads(request.body)
        try: 
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(salesperson, encoder=SalespersonListEncoder, safe=False)
        except: 
            return JsonResponse({"message": "employee number already exists"})


@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse({"customers": customers},encoder=CustomerListEncoder,safe=False)
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(customer,encoder=CustomerListEncoder,safe=False)
        except:
            return JsonResponse({"message":"Cannot use this customer"})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = SalesRecord.objects.all()
        return JsonResponse({"sales": sales}, encoder=SalesRecordListEncoder)
    else:
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse({"message": "Invalid automobile"}, status=400)

        try:
            salesperson_name = content["salesperson"]
            salesperson = Salesperson.objects.get(name=salesperson_name)
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Invalid salesperson"}, status=400)
        
        try:
            customer_name = content['customer']
            customer = Customer.objects.get(name=customer_name)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invalid customer"}, status=400)
            
        
        sales = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SalesRecordDetailEncoder, 
            safe=False,
        )