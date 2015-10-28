sonea
=====

[![NPM version](https://badge.fury.io/js/sonea.svg)](http://badge.fury.io/js/sonea)

[![Build Status](https://travis-ci.org/Ninevillage/sonea.svg?branch=master)](https://travis-ci.org/Ninevillage/sonea)
[![Dependency Status](https://gemnasium.com/Ninevillage/sonea.svg)](https://gemnasium.com/Ninevillage/sonea)

[![Code Climate](https://codeclimate.com/github/Ninevillage/sonea.png)](https://codeclimate.com/github/Ninevillage/sonea)
[![Test Coverage](https://codeclimate.com/github/Ninevillage/sonea/badges/coverage.svg)](https://codeclimate.com/github/Ninevillage/sonea)

## About

web framework to build web applications...

## Installation

```
$ npm install -g sonea
```

## Usage

1. First create a project
```
$ sonea new mySoneaProject
$ cd mySoneaProject/
```
2. Create an application
```
$ sonea new mySoneaApp
```
3. Start Sonea Server
```
$ sonea server
```

### Hint

You don't have to create a project. You can create a standalone sonea app.
```
$ sonea new myStandaloneApp --standalone
$ cd myStandaloneApp/
$ sonea server
```

### Explanation

The command ``` sonea new ``` creates a project if the current directory does 
not contain a sonea project. If the current directory is a sonea project the
command will create a sonea app.

With the ``` --standalone ``` option you define that the command should create
a sonea app independent from the current directory.

## Information

* [Documentation](https://github.com/Ninevillage/sonea/wiki)


## Contribution

Issue, Fork, Pull Request


## License

MIT