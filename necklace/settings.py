"""
Django settings for necklace project.

Generated by 'django-admin startproject' using Django 2.1.1.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '8=p5v4)r@x!1ic0-34cj2@1*#x%0clctom&+rz(x9*wqme+prp'

if 'RDS_HOSTNAME' not in os.environ:
  # SECURITY WARNING: don't run with debug turned on in production!
  DEBUG = True

# 10 MB of memory.
DATA_UPLOAD_MAX_MEMORY_SIZE = 10485760

ALLOWED_HOSTS = [
  "localhost",
  "nefaria-env.fbtffkbpmf.us-west-2.elasticbeanstalk.com",
  ".nafaria.com",
  "www.nafaria.com",
]


# Application definition

INSTALLED_APPS = [
    'demo.apps.DemoConfig',
    'whitenoise.runserver_nostatic',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'spa.middleware.SPAMiddleware',
]

ROOT_URLCONF = 'necklace.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, "templates")],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'necklace.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

if 'RDS_HOSTNAME' in os.environ:
  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': os.environ['RDS_DB_NAME'],
          'USER': os.environ['RDS_USERNAME'],
          'PASSWORD': os.environ['RDS_PASSWORD'],
          'HOST': os.environ['RDS_HOSTNAME'],
          'PORT': os.environ['RDS_PORT'],
      }
  }
else:
  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': 'necklace',
          'USER': 'django',
          'PASSWORD': 'unchained',
          'HOST': '127.0.0.1',
          'PORT': '5432',
      }
  }

if 'RDS_HOSTNAME' in os.environ:
  LOG_FILE = '/var/log/app-logs/django.log'
else:
  LOG_FILE = 'app-logs/django.log'

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
       'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s'
        },
        'simple': {
            'format': '%(asctime)s : module %(name)s : %(message)s'
        },
    },
    'handlers': {
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'formatter': 'simple',
            'filename': LOG_FILE,
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
        'demo.views': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
        'demo.necklace_demo': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
        'demo.predictor': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}


# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'US/Pacific'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_STORAGE = 'spa.storage.SPAStaticFilesStorage'
if 'RDS_HOSTNAME' in os.environ:
  STATIC_ROOT= 'static'
else:
  STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

  STATICFILES_DIRS = [
      os.path.join(BASE_DIR, "static"),
      '/var/www/static/',
  ]
