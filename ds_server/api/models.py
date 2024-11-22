from django.db import models
from django.utils.timezone import now

# Create your models here.
class Reviews(models.Model):
    username = models.CharField(max_length=255, null=False)
    review = models.CharField(max_length=255, null=False)    
    create_date = models.DateTimeField(null=False, blank=True, default=now)
        
    def __str__(self):
        return f'{self.username} - {self.review} - {self.create_date.strftime("%Y-%m-%d %H:%M:%S")}'

class Subscribers(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    subscribe_date = models.DateTimeField(null=False, blank=False, default=now)
    
    def __str__(self):
        return f'{self.email} {self.subscribe_date.strftime("%Y-%m-%d")}'