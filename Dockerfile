# FROM mhart/alpine-node
# WORKDIR /app
# COPY . .
# RUN yarn run build
FROM node:8 as build
ARG REACT_APP_USER
ARG REACT_APP_PWD
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN REACT_APP_BACKEND_BASE_URL=http://localhost:8010 REACT_APP_USER=$REACT_APP_USER REACT_APP_PWD=$REACT_APP_PWD yarn build

FROM mhart/alpine-node:8
RUN yarn global add serve
WORKDIR /app
COPY --from=build /usr/src/app/build .
#COPY ./build .
#ENTRYPOINT ["/bin/sh"]
#CMD [“serve”, “-p 80”, “-s”, “.”]
CMD serve -p 80 -s .

# docker build -t webprofessor/woa-react-app:1.0 .
#docker build --build-arg REACT_APP_USER=admin --build-arg REACT_APP_PWD=admin -t cloud.canister.io:5000/crixo/woa-react-app:1.1 .
# docker build -t cloud.canister.io:5000/crixo/woa-react-app:1.1 .
#docker run -dit -p 8002:80 --name woa-react-app webprofessor/woa-react-app:1.0
#docker container run -it webprofessor/woa-react-app:1.0 bash
#docker run -it webprofessor/woa-react-app:1.0 /bin/sh
#docker tag webprofessor/woa-react-app:1.0 cloud.canister.io:5000/crixo/woa-react-app:1.0

###################################################
# FROM node:8 as build-deps
# WORKDIR /usr/src/app
# COPY package.json yarn.lock ./
# RUN yarn
# COPY . ./
# RUN yarn build

# FROM node:8
# RUN yarn global add serve
# WORKDIR /app
# COPY --from=build-deps /usr/src/app/build .
# ADD ./run.sh /app
# #CMD [“serve”, “-p 80”, “-s”, “.”]

# #CMD serve -s build
# #EXPOSE 80

# EXPOSE 3000
# EXPOSE 35729

# ENTRYPOINT ["/bin/bash", "/app/run.sh"]
###################################################
#ENTRYPOINT ["/bin/bash"]
#CMD [“serve -p 3000 -s .”]
#CMD [“serve”, “-p 80”, “-s”, “.”]

#docker build -t woa-react-app .
#docker run -dit -p 8001:80 woa-react-app .

#look inside the container
#docker container run -it woa-react-app bash
#docker container run -it -p 3000:3000 woa-react-app
#https://www.peterbe.com/plog/how-to-create-react-app-with-docker
#remove all non-running containers: docker container prune
#list child images
#docker inspect --format='{{.Id}} {{.Parent}}' $(docker images --filter since=<provide here the parent img id> -q)