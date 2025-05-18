FROM ubuntu:latest
EXPOSE 8000
WORKDIR /backend
RUN apt-get update && apt-get install --no-install-recommends -y python3 python3-pip python3-venv ffmpeg
RUN python3 -m venv /opt/venv
# RUN source .venv/bin/activate
COPY requirements.txt /backend
RUN /opt/venv/bin/pip install -r requirements.txt --no-cache-dir
COPY . /backend
CMD ["/bin/bash", "-c", "/opt/venv/bin/python manage.py makemigrations && /opt/venv/bin/python manage.py migrate && /opt/venv/bin/python manage.py runserver 0.0.0.0:8000 && /opt/venv/bin/celery -A app worker -l INFO"]