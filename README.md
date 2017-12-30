# WOA React App

[![Build Status](https://travis-ci.org/crixo/woa-react-app.svg?branch=master)](https://travis-ci.org/crixo/woa-react-app)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Sample version

enjoy a [sample app](https://woa-react-app.herokuapp.com/) running on heroku using a [sample backend version](https://woa-api-sample.herokuapp.com) also hosted on heroku.

heroku apps have been deployed using [heroku docker registry deployment option](https://devcenter.heroku.com/articles/container-registry-and-runtime)
```
docker push registry.heroku.com/woa-api-sample/web

docker push registry.heroku.com/woa-react-app/web

```

## How to run the build

- install [docker engine](https://www.docker.com/get-docker)

-  download [docker-compose.yml](https://github.com/crixo/woa-react-app/blob/master/docker-compose.yml)

-  edit the docker-compose.yml to set the path for the volume containing db and logs
```
    volumes:
      - "/your/local/path:/woa"

```

-  at /your/local/path create two folder: "db" and "logs". Copy sqllite database named "woa.db" into the "db" folder

-  login into canister.io via docker cli... ok you gotta know my password dude!!
```
docker login --username=crixo cloud.canister.io:5000

```

-  run docker compose cli from the same path where you downloaded the docker-compose.yml
```
docker-compose up -d

```
- Open the browser, I strongly suggest chrome, at http://localhost:8011 and enjoy WOA react version!

PS: you have to do it only once... next time you log into your computer simply go direct to the last step :-)

