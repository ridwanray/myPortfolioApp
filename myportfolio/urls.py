from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from portfolioApp.views import DownloadResume


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('download/', DownloadResume, name='download_resume'),
    re_path('.*', TemplateView.as_view(template_name='index.html')), 
]
