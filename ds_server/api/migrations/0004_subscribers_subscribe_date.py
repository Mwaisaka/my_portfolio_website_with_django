# Generated by Django 4.2.16 on 2024-11-22 19:54

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_subscribers'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscribers',
            name='subscribe_date',
            field=models.DateField(blank=True, default=django.utils.timezone.now),
        ),
    ]
