from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import APIView
from rest_framework import status

from .serializers import *
from ecommerce.models import *

import stripe
from django.conf import settings
from django.shortcuts import redirect


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/products',
        'api/product/<id>',
        'api/create-product',

        '/api/delete-product/<id>',
        '/api/update-product/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Products.objects.all()
    serialzer = ProductsSerializer(products, many=True)
    return Response(serialzer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Products.objects.get(id=pk)
    serializer = ProductsSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createProduct(request):
    serializer = ProductsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def updateProduct(request, pk):
    product = Products.objects.get(id=pk)
    serializer = ProductsSerializer(instance=product, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteProduct(request, pk):
    product = Products.objects.get(id=pk)
    product.delete()

    return Response('product deleted successfuly!!')



stripe.api_key = settings.STRIPE_SECRET_KEY


class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price': 'prod_O4jnvDvTxWqGn5',
                        'quantity': 1,
                    },
                ],
                payment_method_type = ['card',],
                mode='payment',
                success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/?canceled=true',
            )

            return redirect(checkout_session.url)
    
        except:
            return Response(
                {'error': 'Something went wrong when creating stripe checkout session'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
