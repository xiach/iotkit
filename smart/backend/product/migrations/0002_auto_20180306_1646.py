# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-06 16:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'ordering': ['-updated']},
        ),
        migrations.AlterField(
            model_name='productcapability',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='capability', to='product.Product'),
        ),
        migrations.AlterField(
            model_name='productcapability',
            name='species',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='capability', to='product.ProductSpecies'),
        ),
    ]
