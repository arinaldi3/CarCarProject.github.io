
from django.http import JsonResponse
from django.shortcuts import render


from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, ServiceAppoinment, Technician
import json
# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "vin"]


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["technician_name","employee_number"]


class AppointmentListEndcoder(ModelEncoder):
    model = ServiceAppoinment
    properties = ["vin","customer_name","date","time","technician","reason", "id","finished","vip"]
    encoders = {
        "technician": TechnicianListEncoder(),
    }

class AppoinmentDetailEncoder(ModelEncoder):
    model = ServiceAppoinment
    properties = ["vin","customer_name","date","time","technician","reason", "id","finished","vip"]
    encoders = {
        "technician": TechnicianListEncoder(),
    }

@require_http_methods(["GET","POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse({"technicians": technicians},encoder=TechnicianListEncoder)
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianListEncoder,
                safe=False
            )
        except:
            return JsonResponse({"message": "technician ID already exists"})

@require_http_methods(["GET","POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = ServiceAppoinment.objects.all()
        for app in appointments:
            time = getattr(app,'time')
            date = getattr(app,'date')
            setattr(app, 'date', str(date))
            setattr(app,'time',str(time))
        return JsonResponse({"appointments": appointments}, encoder=AppointmentListEndcoder, safe=False)
    else:
        content = json.loads(request.body)
        try:
            vin = AutomobileVO.objects.get(vin=content["vin"])
            content["vip"] = True
        except AutomobileVO.DoesNotExist:
            content["vip"] = False
            
        if "technician" in content:
            try:
                technician = Technician.objects.get(employee_number = content["technician"])
                content["technician"] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {"message": "Invalid Technician"}, status=400
                )
        
        appointment = ServiceAppoinment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppoinmentDetailEncoder,
            safe=False
        )

@require_http_methods(["GET","DELETE"])
def api_show_appointments(request,pk):
    if request.method == "GET":
            appointment = ServiceAppoinment.objects.get(id=pk)
            return JsonResponse(appointment,encoder=AppoinmentDetailEncoder, safe=False)
    else:
        count, _ = ServiceAppoinment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count>0})


        