
from shop.views import ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('product', ProductViewSet)
urlpatterns = router.urls