from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from .models import Reviews, Subscribers
from django.views.decorators.csrf import csrf_exempt
import json
from datetime import datetime
from django.shortcuts import get_object_or_404

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
            
            existing_subscriber = Subscribers.objects.filter(email=email).first()
            
            if not existing_subscriber:
                # Create a new subscriber
                new_subscriber = Subscribers(email=email)
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
def subscribers(request):
    subscribers = Subscribers.objects.all().values()
    return JsonResponse(list(subscribers), safe=False)

@api_view(['DELETE'])
@csrf_exempt
def delete_subscriber(request,id):
    if request.method == 'DELETE':
        try:
            subscriber = get_object_or_404(Subscribers, id=id)
            subscriber.delete()
            return JsonResponse({"message": "Subscriber deleted successfully"}, status=200)
        except Subscribers.DoesNotExist:
            return JsonResponse({"error": "Subscriber does not exist"}, status=404)
    else:
        return JsonResponse({"erro": "Delete request required"}, status=405)
