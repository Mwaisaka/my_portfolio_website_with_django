from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from .models import Reviews
from django.views.decorators.csrf import csrf_exempt
import json
from datetime import datetime

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

def reviews(request):
    reviews = Reviews.objects.all().values()
    return JsonResponse(list(reviews), safe=False)