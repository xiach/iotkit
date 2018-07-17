# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-21 19:48
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_auto_20180320_0917'),
    ]

    operations = [
        migrations.CreateModel(
            name='FaultCode',
            fields=[
                ('id', models.UUIDField(auto_created=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=8, verbose_name='状态码')),
                ('brief', models.CharField(max_length=32, verbose_name='故障描述')),
                ('solution', models.CharField(max_length=64, verbose_name='解决方案')),
                ('type', models.CharField(choices=[('notice', '提醒'), ('alarm', '警报')], max_length=16, verbose_name='提醒类型')),
            ],
        ),
        migrations.CreateModel(
            name='RepairBlock',
            fields=[
                ('id', models.UUIDField(auto_created=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='维修网点名称')),
                ('phone', models.CharField(max_length=16, verbose_name='联系电话')),
                ('addr', models.CharField(max_length=64, verbose_name='地址')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='hotline',
            field=models.CharField(blank=True, default='', max_length=16, verbose_name='售后服务热线'),
        ),
        migrations.AddField(
            model_name='repairblock',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='repair', to='product.Product'),
        ),
        migrations.AddField(
            model_name='faultcode',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='aftersale', to='product.Product'),
        ),
        migrations.AlterUniqueTogether(
            name='repairblock',
            unique_together=set([('product', 'name')]),
        ),
        migrations.AlterUniqueTogether(
            name='faultcode',
            unique_together=set([('product', 'code')]),
        ),
    ]
