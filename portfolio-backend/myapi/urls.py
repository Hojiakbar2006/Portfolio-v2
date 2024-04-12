from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ProjectViewSet, FeedbackViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'feedbacks', FeedbackViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
