# Generated by Django 5.0.4 on 2024-05-16 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_alter_book_book_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='author',
        ),
        migrations.AddField(
            model_name='book',
            name='active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='book',
            name='authors',
            field=models.CharField(default='unknown author', max_length=170),
        ),
        migrations.AlterField(
            model_name='book',
            name='book_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
