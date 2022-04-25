from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products
from .models import Product
from .serializers import ProductSerializer
# Create your views here.


@api_view(['GET'])
def get_routes(request):
    routes = [
        'api/',
        'api/products',
        'api/products/id',
    ]
    return Response(routes)


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)
