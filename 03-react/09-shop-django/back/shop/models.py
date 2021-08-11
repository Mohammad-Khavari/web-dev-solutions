from django.db.models import Model
from django.db.models import CharField
from django.db.models.fields import DecimalField, URLField

class Product(Model):
    title = CharField(max_length=100)
    image = URLField()
    description= CharField(max_length=500,default='')
    price=DecimalField(max_digits=10, decimal_places=2)
    category= CharField(max_length= 50)
   
    