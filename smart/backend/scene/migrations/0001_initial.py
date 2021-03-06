# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-02-27 11:02
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('device', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Action',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(max_length=128, verbose_name='指令')),
                ('delay', models.IntegerField(default=0, help_text='单位:秒', verbose_name='延时')),
                ('device', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='action', to='device.Device')),
            ],
        ),
        migrations.CreateModel(
            name='Scene',
            fields=[
                ('id', models.UUIDField(auto_created=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='场景名称')),
                ('week', models.CharField(default='0000000', max_length=8, verbose_name='每周')),
                ('time', models.CharField(default='0000', max_length=8, verbose_name='时间')),
                ('is_active', models.BooleanField(default=True, verbose_name='是否可用')),
                ('created', models.DateTimeField(default=django.utils.timezone.now, verbose_name='创建日期')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='更新日期')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='scene', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='action',
            name='scene',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='action', to='scene.Scene'),
        ),
    ]
