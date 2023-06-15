from django.urls import path
from .views import *

urlpatterns = [
    path('', getRoutes),
    path('products', getProducts),
    path('product/<str:pk>', getProduct),
    path('create-product', createProduct),
    path('update-product/<str:pk>', updateProduct),
    path('delete-product/<str:pk>', deleteProduct),

    path('checkout-session', StripeCheckoutView.as_view()),
]