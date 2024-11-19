from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse

# Create your views here.
@api_view(['GET'])
def home(request):
    return HttpResponse("Hello from Django!")