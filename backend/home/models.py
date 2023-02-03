from django.conf import settings
from django.db import models
class Product(models.Model):
    'Generated Model'
    name = models.CharField(max_length=200,)
    price = models.IntegerField()
    description = models.TextField()
    product_type = models.CharField(max_length=50,choices=None,)
