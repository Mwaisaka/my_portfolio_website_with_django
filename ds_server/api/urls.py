from django.urls import path
from .views import home
from . import views

urlpatterns = [
    path('', home, name='home'),
    path('reviews/add_review/', views.add_review, name='add_review'),
    path('reviews/', views.reviews, name='reviews'),
    path('reviews/delete_review/<int:id>/', views.delete_review, name='delete_review'), 
    path('subscribers/', views.subscribers, name='subscribers'),
    path('subscribe/', views.subscribe, name='subscribe'),
     path('subscribers/delete_subscriber/<int:id>/', views.delete_subscriber, name='delete_subscriber'), 
]