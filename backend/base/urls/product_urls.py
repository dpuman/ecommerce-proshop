from django.urls import path
from base.views import product_views as views

urlpatterns = [

    path('', views.get_products, name='get_products'),
    path('<str:pk>/', views.get_product, name='get_product'),
]
