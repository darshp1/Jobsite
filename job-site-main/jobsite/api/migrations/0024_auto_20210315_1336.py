# Generated by Django 3.1.7 on 2021-03-15 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_auto_20210315_1332'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='experience',
            field=models.IntegerField(default=0),
        ),
    ]
