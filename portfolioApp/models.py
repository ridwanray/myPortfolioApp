from django.db import models

# Create your models here.

class Contact(models.Model):

    class Meta:
        db_table = 'contact'

    email = models.EmailField(default="example@example.com")


