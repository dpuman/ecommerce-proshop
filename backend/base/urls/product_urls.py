from django.urls import path
from base.views import product_views as views

urlpatterns = [

    path('', views.get_products, name='get_products'),
    path('create/', views.createProduct, name="product-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    path('<str:pk>/', views.get_product, name='get_product'),

    path('update/<str:pk>/', views.updateProduct, name="product-update"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),
]
