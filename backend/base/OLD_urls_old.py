from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,

)
urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('register/', views.registerUser, name='user_register'),
    path('profile/', views.getUserProfile, name='get_user_profile'),
    path('users/', views.getUsers, name='get_user'),
    path('', views.get_routes, name='get_api'),
    path('products/', views.get_products, name='get_products'),
    path('products/<str:pk>', views.get_product, name='get_product'),
]
