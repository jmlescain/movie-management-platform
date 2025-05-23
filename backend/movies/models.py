from django.db import models

import uuid
import datetime

def generate_filename(instance, filename):
    return "uploads/{0}_{1}".format(uuid.uuid4(), filename)

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    date_added = models.DateField("date added", auto_now_add=True)
    video_file = models.FileField(upload_to=generate_filename)