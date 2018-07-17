# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-13 08:34
from __future__ import unicode_literals

import account.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_application_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='wxAppDefPwd',
            field=models.CharField(default=account.models.get_default_pwd, max_length=64, null=True, verbose_name='wxAppDefPwd'),
        ),
    ]
