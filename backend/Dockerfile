FROM python:3.7-slim
ENV PYTHONUNBUFFERED 1

# RUN apt-get update && apt-get install -y default-libmysqlclient-dev
RUN apt-get update \
  && apt-get install -y --no-install-recommends libpq-dev \
  && apt-get install -y --no-install-recommends build-essential \
  && rm -rf /var/lib/apt/lists/*
# RUN apt-get install -y gcc

RUN mkdir /code
WORKDIR /code

RUN pip install --upgrade pip
COPY ./requirements.txt /code/
RUN pip install -r requirements.txt

RUN apt-get purge -y --auto-remove build-essential \
  && apt-get purge -y --auto-remove

COPY ./quarkle/ /code/

RUN touch /code/start_api.sh && \
echo "#\!/bin/bash" >> /code/start_api.sh && \
echo "python manage.py migrate --noinput" >> /code/start_api.sh && \
echo "python manage.py collectstatic --noinput" >> /code/start_api.sh && \
echo "uvicorn --workers 1 --host 0.0.0.0 --port 8000 --log-level info quarkle.asgi:application" >> /code/start_api.sh && \
chmod +x /code/start_api.sh
