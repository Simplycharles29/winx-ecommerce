# Generated by Django 4.2.2 on 2023-06-10 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0002_products_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='description',
            field=models.TextField(blank=True, max_length=520, null=True),
        ),
    ]