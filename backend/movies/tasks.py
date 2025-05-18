from celery import shared_task

import subprocess
import os


@shared_task
def generate_thumbnail(movie_id, video_path):
    print('{0}/uploads/thumbs/{1}.png'.format(os.getcwd(), movie_id))
    subprocess.call(['ffmpeg', '-y', '-i', video_path, '-ss', '00:00:59.000',
                    '-frames:v', '1', '{0}/uploads/thumbs/{1}.jpg'.format(os.getcwd(), movie_id)])
    return movie_id
