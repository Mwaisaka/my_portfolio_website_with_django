from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from .models import Reviews, NewsletterSubscriber
from django.views.decorators.csrf import csrf_exempt
import json
from datetime import datetime
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
import requests

# Create your views here.
@api_view(['GET'])
def home(request):
    return HttpResponse("Hello from Django!")

@api_view(['POST'])
@csrf_exempt
def add_review(request):
    if request.method == "POST":
        try:
            data=json.loads(request.body)# Parse JSON data from the request body
            username=data.get("username") # Extract 'task' from the request payload
            review=data.get("review") # Extract 'task' from the request payload
        
            if review:            
                # Check if the user has already submitted the same review
                existing_review = Reviews.objects.filter(username=username, review=review).first()
                
                if not existing_review:               
                    # Create a new review
                    new_review = Reviews(username=username, review=review)
                    new_review.save()
                    
                    # Get the current date and time
                    current_datetime = datetime.now()
                    
                    # Return the newly created review as JSON response
                    return JsonResponse({
                        'id': new_review.id,
                        'username': new_review.username,
                        'review': new_review.review,
                        'create_date': current_datetime,
                    }, status=201)  
                else:
                    return JsonResponse({'error': 'Review with the same name already exists'}, status=403)         
            else:
                return JsonResponse({'error': 'Review name is required'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON payload'}, status=400)
    else:
      return JsonResponse({'error': 'POST request required'}, status=405)

@api_view(['GET'])
@csrf_exempt
def reviews(request):
    reviews = Reviews.objects.all().values()
    return JsonResponse(list(reviews), safe=False)

@api_view(['DELETE'])
@csrf_exempt
def delete_review(request,id):
    if request.method == 'DELETE':
        try:
            review = get_object_or_404(Reviews, id=id)
            review.delete()
            return JsonResponse({"message": "Review deleted successfully"}, status=200)
        except Reviews.DoesNotExist:
            return JsonResponse({"error": "Review does not exist"}, status=404)
    else:
        return JsonResponse({"erro": "Delete request required"}, status=405)

@api_view(['POST'])
@csrf_exempt
def subscribe(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            
            existing_subscriber = NewsletterSubscriber.objects.filter(email=email).first()
            
            if not existing_subscriber:
                # Create a new subscriber
                new_subscriber = NewsletterSubscriber(email=email)
                new_subscriber.save()
                
                # Get the current date and time
                current_datetime = datetime.now()
                
                # Return the new subscriber as a JSON response
                return JsonResponse(
                    {
                    "id": new_subscriber.id,
                    "email": new_subscriber.email,
                    'subscribe_date': current_datetime,
                }, status=200)
            else:
                return JsonResponse({"error": "Email already exists"}, status=403)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON payload'}, status=400)
    else:
      return JsonResponse({'error': 'POST request required'}, status=405)

@api_view(['GET'])
@csrf_exempt
def newsletter_subscriber(request):
    newsletter_subscriber = NewsletterSubscriber.objects.all().values()
    return JsonResponse(list(newsletter_subscriber), safe=False)

@api_view(['DELETE'])
@csrf_exempt
def delete_subscriber(request,id):
    if request.method == 'DELETE':
        try:
            subscriber = get_object_or_404(NewsletterSubscriber, id=id)
            subscriber.delete()
            return JsonResponse({"message": "Subscriber deleted successfully"}, status=200)
        except NewsletterSubscriber.DoesNotExist:
            return JsonResponse({"error": "Subscriber does not exist"}, status=404)
    else:
        return JsonResponse({"erro": "Delete request required"}, status=405)

@csrf_exempt  # Exempting CSRF for API requests (can be handled better for production)
def login(request):
  if request.method == 'POST':
    try:
      # Parse JSON data from the request body
      data=json.loads(request.body)
      username = data.get("username")
      password = data.get("password")
      
      # Validate required fields
      if not all([username, password]):
          return JsonResponse({"error": "Username and password are required"}, status=400)
      
      # Check if the user exists
      # subscriber_exists = Subscriber.objects.filter(username=username).exists()
      # if not subscriber_exists:
      #     return JsonResponse({"error": "Invalid username or password"}, status=401)
        
      # Authenticate user
      # subscriber = authenticate(username=username, password=password)
      subscriber = authenticate(request, username=username, password=password)
      
      if subscriber is not None:
        # If using session-based authentication
        # django_login(request, subscriber)
        
        # Generate JWT token
        refresh = RefreshToken.for_user(subscriber)
                
        # Sucessfully authenticated
        return JsonResponse({
          'message': "Login successful",
          'token': str(refresh.access_token),
          'refresh_token': str(refresh),
          'subscriber': {
            'id': subscriber.id,
            'username': subscriber.username,
            'fullname': subscriber.fullname,
          }
        }, status=200)
      else:
        # Incorrect username or password
        return JsonResponse({"error": "Invalid username or password"}, status=401)
    except json.JSONDecodeError:
      return JsonResponse({"error":"Invalid JSOn payload"},status=400)
    except Exception as e:
      return JsonResponse({"error":str(e)},status=500)
  else:
    return JsonResponse({"error":"Post request required"},status=405)

def random_quote(request):
    url = "https://stoic.tekloon.net/stoic-quote"
    try:
        response = requests.get(url)
        data = response.json()
        quote = data.get("data", {}).get("quote", "No quote available")  # Safely extract the quote
        return JsonResponse({"quote": quote}, safe=False)  # Return only the quote
        # return JsonResponse(response.json(), safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)