# from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from ecommerce.models import *

class ProductsSerializer(serializers.HyperlinkedModelSerializer):
    # image = serializers.ImageField(max_length=None, allow_empty_file=False, allow_null=False, use_url=True, required=False)
    class Meta:
        model = Products
        fields = ('id', 'name', 'image', 'price', 'description', 'category', 'quantity')