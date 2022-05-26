from django.contrib import admin
from .models import Product, Review, Order, OrderItem, ShippingAddress
# Register your models here.


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    # list_display = [f.name for f in Product._meta.get_fields()]
    pass


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    # list_display = [f.name for f in Review._meta.get_fields()]
    pass


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    # list_display = [f.name for f in Order._meta.get_fields()]
    pass


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    # list_display = [f.name for f in OrderItem._meta.get_fields()]
    pass


@admin.register(ShippingAddress)
class ShippingAddressAdmin(admin.ModelAdmin):
    # list_display = [f.name for f in ShippingAddress._meta.get_fields()]
    pass
