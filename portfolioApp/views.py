import os
import mimetypes
from django.shortcuts import render
from django.core.files import File
from django.http import HttpResponse
from myportfolio.settings import BASE_DIR, MEDIA_ROOT

# Create your views here.

def DownloadResume(request):
    
    path_to_file = MEDIA_ROOT + '/Resume.pdf'
    f = open(path_to_file, 'rb')
    pdfFile = File(f)
    response = HttpResponse(pdfFile.read())
    response['Content-Disposition'] = 'attachment; filename="Resume.pdf"'
    return response 