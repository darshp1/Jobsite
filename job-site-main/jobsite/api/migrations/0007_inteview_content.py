# Generated by Django 3.1.7 on 2021-02-23 07:46

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_job_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='inteview',
            name='content',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]