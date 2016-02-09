# Animal House Example
## An example of Angular1 using Typescript/ES6 getting ready for Angular2


This example is meant to show component style architecture in a functional Angular 1.X application.


## Features

* Uses Typescript via Typescript Loader
* ES6, and ES7 support with babel.js.
* All the lovely features from the workflow I forked to create this: https://github.com/Foxandxss/angular-webpack-workflow
* No gulp and no grunt, just npm run-scripts.
* Runs to a Node Express background with MongoDB.

## Client Installation

To use it, just clone this repo and install the npm dependencies:

```shell
$ git clone https://github.com/twomoonsfactory/animal-house-example my_app
$ cd my_app
$ npm install
```

## Server Installation

The server should have been downloaded with the rest of the repo -- but make sure to have installed MongoDB previously.

## Start the Server

* Run MongoDB
* In Command Prompt or Terminal, navigate to the repo's source folder, and enter `node server.js` -- this will start the server and connect the DB.
* The server will serve up the contents of the `public` folder, which contains the result of the `build` script.
* This is served to `http://localhost:5001`

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `build` - generate a minified build to dist folder, `public`
* `dev` - start development server, try it by opening `http://localhost:8080/`
* `test` - run all tests
* `test:live` - continuously run unit tests watching for changes

* Note, for dev server, api calls to the DB in the service will need to be aimed directly to 'http://localhost:5001/'

See what each script does by looking at the `scripts` section in [package.json](./package.json).