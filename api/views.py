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
import requests
import json
from appsecrets import LEETCODE_COOKIE, LEETCODE_CSRFTOKEN


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


@api_view(['GET'])
def GetGitHubRepos(self):
    x = requests.get('https://api.github.com/users/farhanghazi97/repos')
    repos = x.json()
    resp = []
    for repo in repos:
        resp.append({
            'repo_name': repo['name'],
            'repo_url': repo['html_url'],
            'repo_desc': repo['description'],
            'repo_lang': repo['language']
        })
    return Response(
        json.dumps(resp),
        status=status.HTTP_200_OK,
        content_type="application/json"
    )


@api_view(['GET'])
def GetLeetCodeData(self):
    headers = {
        "Cookie": LEETCODE_COOKIE,
        "x-csrftoken": LEETCODE_CSRFTOKEN
    }
    x = requests.get(
        'https://leetcode.com/api/problems/algorithms/', headers=headers).json()
    problem_data = {}
    problem_data['total_questions'] = x['num_total']
    problem_data['total_solved'] = x['num_solved']
    problem_data['easy_solved'] = x['ac_easy']
    problem_data['medium_solved'] = x['ac_medium']
    problem_data['hard_solved'] = x['ac_hard']
    total_easy = 0
    total_medium = 0
    total_hard = 0
    for problem in x['stat_status_pairs']:
        if problem['difficulty']['level'] == 1:
            total_easy += 1
        elif problem['difficulty']['level'] == 2:
            total_medium += 1
        elif problem['difficulty']['level'] == 3:
            total_hard += 1
    problem_data['total_easy'] = total_easy
    problem_data['total_medium'] = total_medium
    problem_data['total_hard'] = total_hard
    return Response(
        json.dumps(problem_data),
        status=status.HTTP_200_OK,
        content_type="application/json"
    )
