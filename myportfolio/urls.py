from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from api.views import DownloadResume, GetGitHubRepos, GetLeetCodeData, GetMediumData

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('download/', DownloadResume, name='download_resume'),
    path('github/', GetGitHubRepos, name='get_git_repos'),
    path('leetcode/', GetLeetCodeData, name='get_leetcode_data'),
    path('medium/', GetMediumData, name='get_medium_data'),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
