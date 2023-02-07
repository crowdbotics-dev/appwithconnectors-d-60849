from django.conf import settings
from django.db import models
class Product(models.Model):
    'Generated Model'
    name = models.CharField(max_length=200,)
    price = models.IntegerField()
    description = models.TextField()
    product_type = models.CharField(choices=None,max_length=50,)
class Store(models.Model):
    'Generated Model'
    name = models.CharField(max_length=200,)
    address = models.TextField()
    city = models.CharField(max_length=100,)
    state = models.CharField(max_length=50,)
    zip = models.CharField(max_length=10,)
    country = models.CharField(max_length=50,)
    phone = models.CharField(max_length=10,)
    website = models.URLField()
    products = models.ManyToManyField("home.Product",related_name="store_products",)
