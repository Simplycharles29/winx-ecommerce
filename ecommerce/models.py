from django.db import models

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/', blank=False, null=False)
    price = models.IntegerField()
    description = models.TextField(max_length=520, blank=True, null=True)
    category = models.CharField(max_length=255)
    quantity = models.IntegerField(blank=True, default=1)

    def __str__(self) -> str:
        return self.name