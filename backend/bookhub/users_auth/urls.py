from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('auth_user/', views.authenticate_user, name='authenticate-user'),
    path('create-user/', views.add_user, name='create-user'),
    path('get-faculty/', views.get_faculty, name='faculty names'),
    path('add-faculty/', views.add_faculty, name = 'add faculty'),
    path('del-faculty/', views.del_faculty, name = 'add faculty'),
    # path('', views.index_view, name='index'),
    # Other authentication-related URL patterns (e.g., registration, password reset, etc.)
]

if settings.DEBUG:
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


