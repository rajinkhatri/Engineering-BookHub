from django.shortcuts import render
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Faculty

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def authenticate_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        # Debugging print statements
        print(f"Received username: {username}")
        print(f"Received password: {password}")

        # Perform user authentication logic here
        user = authenticate(username=username, password=password)
        if user is not None:
            response_data = {'success': True}
        else:
            response_data = {'success': False}

        return JsonResponse(response_data)


@csrf_exempt
def add_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        # Debugging print statements
        print(f"Received username: {username}")
        print(f"Received password: {password}")

        if User.objects.filter(username=username).exists():
            response_data = {'success': False,
                             'message': 'The user is already made'}
        else:
            user = User.objects.create_superuser(
                username=username, password=password)
            response_data = {'success': True}

        return JsonResponse(response_data)


@csrf_exempt
def get_faculty(request):
    faculty_list = Faculty.objects.all()
    data = [{'name': faculty.name, 'image': faculty.image.url}
            for faculty in faculty_list]

    for item in data:
        print(f"Name: {item['name']}, Image URL: {item['image']}")

    return JsonResponse(data, safe=False)


@csrf_exempt
def add_faculty(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        facultyname = data.get('facultyname')
        facultyimage = data.get('facultyimage')

        new_faculty = Faculty(name=facultyname, image=facultyimage)
        new_faculty.save()

        response_data = {'success': True}
        return JsonResponse(response_data)
    else:
        response_data = {'success': False}
        return JsonResponse(response_data)


@csrf_exempt
def del_faculty(request):
    if request.method == "DELETE":
        data = json.loads(request.body)
        facultyname = data.get('facultyname')
        facultyimage = data.get('facultyimage')

        # Debugging print statements
        print(f"Received username: {facultyname}")
        print(f"Received password: {facultyimage}")

        dfaculty = Faculty.objects.filter(name=facultyname)
        dfaculty.delete()

        response_data = {'success': True}
        return JsonResponse(response_data)
    else:
        response_data = {'success': False}
        return JsonResponse(response_data)


def index_view(request):
    # Your view logic here
    return 'hello world'
