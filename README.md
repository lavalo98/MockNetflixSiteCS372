# LoginModuleCS372

Developed for CS372 Software Construction Projects 1, 2, and 3 by Luis Avalo and Darian Marvel

## Documents

Design documents (diagrams and stories) are located in `Docs/`.

## Other File Organization

* `Example`: example code and other files from class
* `Models`: database schema models
* `public`: files to be directly served by Node.js (CSS, images, movies)
* `views`: files for PUG template engine pages
* `Old`: old files no longer used
* `Routes`: files used to run each page

* `*.sh`: useful scripts for automated deployment of test environments

## Docker

* `Dockerfile`: instructions for Docker to build `loginmodule` image to run the site in a container
* `docker-compose.yml`: instructions for docker-compose to start `loginmodule` and `MongoDB` services together

## Building and Running Instructions

Assuming you have docker and docker-compose installed:

1. If you want a secure database password, edit `docker-compose.yml` and change the password (MONGO_INITDB_ROOT_PASSWORD) from "example" to whatever you wish. Then, copy `mongodb.uri.sample` to `mongodb.uri`, and make the necessary replacements inside that file (username "root", password, IP)
2. either `docker build -t loginmodule .` or `docker-compose build` to build
3. `docker-compose up`

For step 1 if you are running docker-compose, use the IP of your computer for the IP of the database. The proper port is forwarded
to the database container.
Otherwise, use the proper address of the computer that the database is running on.
