# Generated by Django 2.2.11 on 2020-03-15 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_auto_20200315_1807'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='score',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='tile',
            name='order',
            field=models.FloatField(default=0.8920520391170665),
        ),
    ]
