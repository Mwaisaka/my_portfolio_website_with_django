from django.contrib import admin
from .models import Reviews, Subscribers

# Register your models here.
class ReviewsAdmin(admin.ModelAdmin):
    list_display = ("username", "review","create_date")

admin.site.register(Reviews, ReviewsAdmin)

class SubscribersAdmin(admin.ModelAdmin):
    list_display = ("email","subscribe_date")

admin.site.register(Subscribers, SubscribersAdmin)