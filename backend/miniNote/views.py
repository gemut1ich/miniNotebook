from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NoteSerializer
from .models import Note

# Create your views here.

class NoteView(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
