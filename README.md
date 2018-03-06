# Lifes a Riot with Spies

> Adding a logger with morgan, experiment with the different formats...

> If you are brave, add a rotating file system using, well rotating-file-system

> If you are really, really brave use Winston to set log levels!

_TODO_

* Attendees can add metadata about their spy, namely a counter to display state
* Attendees know who has called their spy by remote IP
* Attendees can control how quickly their spy will respond


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