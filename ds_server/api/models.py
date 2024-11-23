from django.db import models
from django.utils.timezone import now
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.
class Reviews(models.Model):
    username = models.CharField(max_length=255, null=False)
    review = models.CharField(max_length=255, null=False)    
    create_date = models.DateTimeField(null=False, blank=True, default=now)
        
    def __str__(self):
        return f'{self.username} - {self.review} - {self.create_date.strftime("%Y-%m-%d %H:%M:%S")}'

class NewsletterSubscriber(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    subscribe_date = models.DateTimeField(null=False, blank=False, default=now)
    
    def __str__(self):
        return f'{self.email} {self.subscribe_date.strftime("%Y-%m-%d")}'
    
class SubscriberManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)  # Use set_password to hash the password
        print("Hashed password:", user.password)  # Debugging line to check hash
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(username, password, **extra_fields)
    
    def get_by_natural_key(self, username):
        return self.get(username=username)
    
class Subscriber(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)
    fullname = models.CharField(max_length=255)
    email=models.EmailField(max_length=255, unique=True)
    create_date = models.DateField(null=False, blank=True, default=now)
    # password = models.CharField(max_length=255)  # Store hashed password here
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = SubscriberManager()
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'fullname']  # Fields required when creating a user
    
    def save(self, *args, **kwargs):
        # if not self.pk:  # Only hash the password if it's a new object
        #     self.password = make_password(self.password)
        super().save(*args, **kwargs)
        
    # groups = models.ManyToManyField(
    #     Group,
    #     related_name="subscriber_set",  # Unique related name
    #     blank=True,
    # )
    # user_permissions = models.ManyToManyField(
    #     Permission,
    #     related_name="subscriber_permissions",  # Unique related name
    #     blank=True,
    # )

    def __str__(self):
        return f'{self.username} - {self.email}'