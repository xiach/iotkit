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
        ('account', '0001_initial'),
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.UUIDField(auto_created=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='ID')),
                ('mac', models.CharField(max_length=12, unique=True, verbose_name='MAC')),
                ('sn', models.CharField(blank=True, max_length=32, null=True, unique=True, verbose_name='SN')),
                ('version', models.CharField(blank=True, default='', max_length=16, verbose_name='固件版本')),
                ('created', models.DateTimeField(default=django.utils.timezone.now, verbose_name='创建日期')),
                ('activated', models.DateTimeField(blank=True, null=True, verbose_name='激活日期')),
                ('is_active', models.BooleanField(default=True, verbose_name='是否可用')),
                ('secret', models.CharField(blank=True, max_length=32, null=True, verbose_name='设备密钥')),
                ('owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='device', to=settings.AUTH_USER_MODEL)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='device', to='product.Product')),
            ],
        ),
        migrations.CreateModel(
            name='DeviceBinding',
            fields=[
                ('id', models.UUIDField(auto_created=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='ID')),
                ('bound', models.DateTimeField(default=django.utils.timezone.now, verbose_name='绑定日期')),
                ('name', models.CharField(default='', max_length=32, verbose_name='设备名称')),
                ('memo', models.CharField(blank=True, default='', max_length=64, verbose_name='备注')),
                ('device', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='binding', to='device.Device')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='binding', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'permissions': (('gen_binding_code', 'can generate binding code'),),
            },
        ),
        migrations.CreateModel(
            name='DeviceDealing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dealer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dealing', to='account.Dealer')),
                ('device', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='dealing', to='device.Device')),
            ],
        ),
        migrations.CreateModel(
            name='VirtualOperation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='是否可用')),
                ('device', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='virtualop', to='device.Device')),
                ('tenant', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='virtualop', to='account.Tenant')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='devicebinding',
            unique_together=set([('device', 'user')]),
        ),
    ]
