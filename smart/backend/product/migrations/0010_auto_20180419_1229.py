# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-19 12:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0009_auto_20180410_1640'),
    ]

    operations = [
        migrations.AddField(
            model_name='productspecies',
            name='scene',
            field=models.CharField(blank=True, default='', max_length=128, verbose_name='场景配置'),
        ),
        migrations.AlterField(
            model_name='product',
            name='scene',
            field=models.CharField(blank=True, default='', max_length=128, verbose_name='场景配置'),
        ),
    ]
