# Generated by Django 3.0.4 on 2020-08-19 23:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='details',
            field=models.TextField(default='description'),
        ),
    ]
