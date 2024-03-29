# Individual Project Code - Thom Treebus (k20069603)
This repository contains the source code developed as part of the 6CCS3PRJ Individual Project.

The software is composed of a Bayesian inference API that can be used to create Bayesian networks and run probablistic inference on them. 
## Software Setup
Clone the reporitory, or download the source code and open a new terminal window inside the project directory.

In order to run the software, you must have the latest stable release version (*note: future versions might not work with the versions that were used during development*) of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Ensure these are installed by using:
```
$ node -v
$ npm -v
```

Install the packages:
```
$ npm install
```

Some environment variables are required to run the application. Here is the complete list of variables that need to be stored in a file named .env along with example values that can be used. 
```
DB_CONNECTION_URL=mongodb://localhost:27017/db
TEST_DB_CONNECTION_URL=mongodb://localhost:27017/test
URI=https://localhost:
```

Start the server by running the start command:

```
$ npm run start
```
