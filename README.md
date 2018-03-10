# Lifes a Riot with Spies

_Logging_

> Adding a logger with morgan, experiment with the different formats...

> Try and create a log format where you can track who is calling your spy from where

> If you are brave, add a rotating file system using, well rotating-file-system

> If you are really, really brave use Winston to set log levels!

_Controlling Response Time_

> Create a new route that responds using static json with a status code of 200

> Create a new route that responds using json with faker to generate dynamic data

> Add a config file with key value pairs of routes and response times

> Add a config route which has the POST method available, with the ability to change response times programatically

> For the really brave, use pug to create an interface for managing that config!

_Spy Counter_

> Use nedb to create a new data structure

> Report from each request to that route to the database with an updated number of total requests

> Routes available in this repo:

* POST http://localhost:3000/counter - post JSON
    * {"route":"faker", "requests": 122}
    * adds new endpoint to tracking database
* GET http://localhost:3000/counter - returns the data in the tracking database
* GET http://localhost:3000/faker - gets random data
* GET http://localhost:3000/spies - returns static data
* POST http://localhost:3000/config - post JSON
* {
    "routes" : {
    	"index": 2000,
    	"spies": 5000,
    	"faker": 1000
    }
}
* Changes the wait time for each endpoint in the spy

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```
npm version required - 3.10.X and above
node version required - v6.9.X and above
Clone this mutha down, cd in

```

## Usage

```
npm start - will start the application on port 3000 - navigate to http://localhost:3000
env PORT={port_number} npm start will start on http://localhost:{port_number}

```

## Docker

To build in the root dir, run the following:

```
docker build --rm -f Dockerfile .
```

To run:

```
docker run --rm -d -p 5000:3000 lifes-a-riot-with-spies
```
*Where 5000 is the host port and 3000 is the exposed port in the container


## Contribute

PRs accepted.

## License

MIT © Ash Winter and Chris Chant