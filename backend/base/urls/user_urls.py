from django.urls import path
from base.views import user_views as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('register/', views.registerUser, name='user_register'),
    path('profile/', views.getUserProfile, name='get_user_profile'),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),

    path('', views.getUsers, name='get_user'),

    path('<str:pk>/', views.getUserById, name='user'),

    path('update/<str:pk>/', views.updateUser, name='user-update'),

    path('delete/<str:pk>/', views.deleteUser, name='user-delete'),

    path('routes/', views.get_routes, name='get_api'),

]
