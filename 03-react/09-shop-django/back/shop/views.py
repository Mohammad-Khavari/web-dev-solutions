from shop.models import Product
from shop.serializers import ProductSerializer
from rest_framework.viewsets import ModelViewSet
from shop.filters import ProductFilter


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter