from shop.models import Product
from rest_framework.serializers import HyperlinkedModelSerializer

class ProductSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'image','title', 'description', 'price', 'category']
        read_only_fields = ['id']