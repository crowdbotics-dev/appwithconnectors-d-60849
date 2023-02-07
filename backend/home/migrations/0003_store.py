# Generated by Django 2.2.28 on 2023-02-07 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_product'),
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('address', models.TextField()),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=50)),
                ('zip', models.CharField(max_length=10)),
                ('country', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=10)),
                ('website', models.URLField()),
                ('products', models.ManyToManyField(related_name='store_products', to='home.Product')),
            ],
        ),
    ]