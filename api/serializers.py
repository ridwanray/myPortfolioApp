from rest_framework import serializers
from portfolioApp.models import Contact

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = (
            'id', 'email',
        )