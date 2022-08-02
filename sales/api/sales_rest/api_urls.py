from django.urls import path
from .views import api_list_customer, api_list_sales, api_list_salespeople

urlpatterns =[ 
    path('salespeople/', api_list_salespeople, name="api_list_salespeople"),
    path('sales/', api_list_sales, name="api_list_sales"),
    path('customers/', api_list_customer, name="api_list_customers"),
    
]