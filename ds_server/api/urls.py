from django.urls import path
from .views import home
from . import views

urlpatterns = [
    path('', home, name='home'),
    path('reviews/add_review/', views.add_review, name='add_review'),
    path('reviews/', views.reviews, name='reviews'),
]