# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-05-28 11:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0010_userprofile_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='avatar_updated',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='avatar更新日期'),
        ),
    ]
