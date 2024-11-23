from django.contrib import admin
from .models import Reviews, NewsletterSubscriber, Subscriber

# Register your models here.
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("username", "review","create_date")

admin.site.register(Reviews, ReviewAdmin)

class SubscribersAdmin(admin.ModelAdmin):
    list_display = ("email","subscribe_date")

admin.site.register(NewsletterSubscriber, SubscribersAdmin)

class SubscriberAdmin(admin.ModelAdmin):
    list_display = ("username","fullname","email","create_date","password")

admin.site.register(Subscriber, SubscriberAdmin)