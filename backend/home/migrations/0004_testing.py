# Generated by Django 2.2.13 on 2020-06-15 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_message"),
    ]

    operations = [
        migrations.CreateModel(
            name="Testing",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("testing", models.BigIntegerField()),
            ],
        ),
    ]
