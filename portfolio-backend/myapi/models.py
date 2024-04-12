from django.db import models


class Project(models.Model):

    class Status(models.TextChoices):
        VISIBLE = 'ON'
        UNVISIBLE = 'OFF'

    title = models.CharField(max_length=50, blank=False, null=False)
    description = models.CharField(max_length=100, blank=False, null=False)
    demo_url = models.URLField(blank=False, null=False)
    github_url = models.URLField(blank=False, null=False)
    image = models.ImageField(upload_to='images', blank=False, null=False)
    delay = models.DecimalField(default=0, max_digits=5, decimal_places=2)
    visible = models.SmallIntegerField(default=0)
    


class Feedback(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    surname = models.CharField(max_length=50, blank=False, null=False)
    email = models.CharField(max_length=50, blank=False, null=False)
    phone = models.CharField(max_length=50, blank=False, null=False)
    message = models.TextField(max_length=500, blank=False, null=False)
    sent_date = models.DateTimeField(auto_now_add=True)
    unread = models.SmallIntegerField(default=1)

    class Meta:
        ordering = ['-sent_date']
