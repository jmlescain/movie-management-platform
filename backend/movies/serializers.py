from movies.models import Movie
from rest_framework import serializers

class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie
        fields = ["title", "description", "date_added", "video_file"]
