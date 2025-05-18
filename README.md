# Movie Management Platform

A full-stack movie management platform built with Django and React.

## Tech Stack
- Front-end:
    - __ReactJS__ (with Vite)
    - __Axios__ for data fetching
    - __Tailwind CSS__ for styling
- Backend:
    - __Django__ with __Django Rest Framework__ for REST API
    - __SQLite__ for lightweight database
    - __Celery__ & __Redis__ for async task (thumbnail generation)
    - __FFMPEG__ for thumbnail generation
- Docker:
    - __Docker Compose__ for easier environment setup for both front-end and backend
 
Development was done in a Windows machine with WSL2.
 
## Prerequisites
To make it easier to play around with the web app, I have provided a Docker Compose YAML configuration to automate the environment setup. You would just need __Docker CLI__ or __Docker Desktop__.

But for faster development, I would recommend installing the following prerequisites locally or natively:
- Front-end:
    - __Node__: version 18+ or 20+ as recommended by Vite
    - __Yarn__: If not installed with Node, you can install with `npm install -g yarn`. You can still use NPM though but delete the `yarn.lock` file.
- Backend:
    - __Python__: the latest Python 3 version is recommended
    - __pip__: needed to install required packages including Django, Django Rest Framework, and Celery
    - __venv__: optional but I would recommend using virtual environments
    - __Redis__: needed for Celery and async tasks
    - __FFMPEG__: needed for thumbnail generation
 
## Setup instructions
### With Docker
1. Clone this repo.
2. `cd` into the repo directory
3. Run `docker compose up`
4. Wait until the docker images are built and the front-end, backend, and redis is running
5. Visit `127.0.0.1:5173` to visit the web app. You can also visit `127.0.0.1:8000/admin` for the Django admin page (will need a superuser account).

### Without Docker
1. Install Redis
2. Install NodeJS and yarn
3. Install Python 3 and pip
4. Install ffmpeg (you might need additional path configuration if you are using native Windows)
5. `cd` into `frontend` directory
6. Run `yarn install` or `npm install`
7. Run vite with `yarn dev` or `npm run dev`
8. `cd` into `backend` directory
9. Install prerequisite packages with `pip install -r requirements.txt`
10. Run `python manage.py makemigrations && python manage.py migrate` to commit model migrations
11. Run `python manage.py runserver` to start the Django development server
12. Run `celery -A app worker -l INFO` to start our task queue
13. Visit `127.0.0.1:5173` to visit the web app. You can also visit `127.0.0.1:8000/admin` for the Django admin page (will need a superuser account).

## Known Issues/Limitations
- Thumbnail generation is async. It starts as soon as the movie entry is commited to DB. Thus, the thumbnail link might return a `404` error code while it is still being generated. A placeholder thumbnail is provided as a fallback.
- Redis and Celery is configured to work with Docker. If running the backend locally (without Docker), change the `CELERY_BROKER_URL` and `CELERY_RESULT_BACKEND` values in `settings.py` from `redis://redis:6379` to `redis://127.0.0.1:6379`.

## Demo Instructions
### Browsing movies with `Title` and `Date Added` sort

https://github.com/user-attachments/assets/9291c72f-8778-4eb6-a32d-c22ab4673410

### Adding a movie

https://github.com/user-attachments/assets/4fceef18-3976-4a5f-a6ac-08f874811648

### Edit a movie's details

https://github.com/user-attachments/assets/067dbdf3-2356-455f-b3d6-ddb907943dce

### Update a movie's video file

https://github.com/user-attachments/assets/71978e30-e40e-4932-a97f-43b9f4fdbdc8

### Delete a movie

https://github.com/user-attachments/assets/d6e0ad98-e3df-4c67-b16a-a3483d249f8f

