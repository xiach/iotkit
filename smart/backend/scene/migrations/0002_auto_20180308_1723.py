# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-08 17:23
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('device', '0001_initial'),
        ('scene', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='scene',
            name='device',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='timing', to='device.Device'),
        ),
        migrations.AlterField(
            model_name='action',
            name='id',
            field=models.UUIDField(auto_created=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
