from django.urls import path
from .views import api_delete_salesperson, api_list_customer, api_list_sales, api_list_salespeople, delete_sale

urlpatterns =[ 
    path('salespeople/', api_list_salespeople, name="api_list_salespeople"),
    path('sales/', api_list_sales, name="api_list_sales"),
    path('customers/', api_list_customer, name="api_list_customers"),
    path('salespeople/<int:pk>/', api_delete_salesperson, name="api_delete_salesperson"),
    path('sales/<int:pk>/', delete_sale, name="delete_sale")
    
]