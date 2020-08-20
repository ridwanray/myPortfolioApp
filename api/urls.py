from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ContactsSet

router = DefaultRouter()

router.register(r'contacts', ContactsSet, basename='contact')

urlpatterns = router.urls