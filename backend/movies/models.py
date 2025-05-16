from django.db import models

class Movies(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    date_added = models.DateField("date added")
    video_file = models.FileField(upload_to="uploads/")