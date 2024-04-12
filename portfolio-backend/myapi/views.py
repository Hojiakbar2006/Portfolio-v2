from rest_framework import viewsets
from .models import Project, Feedback
from .serializers import ProjectSerializer, FeedbackSerilizer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerilizer
