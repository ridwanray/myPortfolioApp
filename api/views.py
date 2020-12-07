from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView
from rest_framework.decorators import api_view
from .serializers import ContactSerializer
from portfolioApp.models import Contact
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from django.core.mail import send_mail
import os
import mimetypes
from django.core.files import File
from django.http import HttpResponse
from myportfolio.settings import BASE_DIR, MEDIA_ROOT


class ContactsSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing contact instances.
    """
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def create(self, request):

        data = request.data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        subject = '%s tried reaching out to you!' % data.get('email')
        message = 'Quickly email back at this email address!'
        recipients = ["farhansghazi@outlook.com"]
        send_mail(
            subject=subject,
            message=message,
            from_email=None,
            recipient_list=recipients,
            fail_silently=False
        )

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
            headers=headers
        )

# Create your views here.


@api_view(['GET'])
def DownloadResume(self):

    path_to_file = MEDIA_ROOT + '/Resume.pdf'
    f = open(path_to_file, 'rb')
    pdfFile = File(f)
    response = HttpResponse(pdfFile.read())
    response['Content-Disposition'] = 'attachment; filename="Resume.pdf"'
    return response
