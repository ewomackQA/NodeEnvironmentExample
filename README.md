# NodeEnvironmentExample
## Current Setup
* Express serving a static html file.
* Webpack bundling the src directory together
* ESLint configured
* babel transpiling (Able to utilise es7)
* nsp installed and configured
* localtunnel installed and configured
* mocha/chai/jsdom tests setup
* mock api setup with json-schema-faker
* delete added to api
* hotswap to development functionality added (baseUrl file)
* sourcemaps with uglify js generated
* css created/generated
* hashing naming conventions for cache busting generated
* seperate bundles for javascript to avoid large downloads generated
* build step created for creating production ready files 
* temporary server to run the static files created
## npm scripts
### "start": "npm-run-all --parallel security-check run:server lint:watch"
Starts the server, runs a security check, runs eslint on watch mode
### "run:server": "babel-node buildScripts/srcServer.js"
Transpiles and runs the server
### "share": "npm-run-all --parallel security-check run:server localtunnel "
Same as start however also runs localtunnel to provide a url
### "localtunnel": "lt --port 3000"
Starts localtunnel on any server to port 3000
### "security-check": "nsp check"
Runs the nsp package for package security analysis
### "lint": "esw webpack.config.* src buildScripts"
Runs eslint to scan files in the src and buildScripts folders
### "lint:watch": "npm run lint -- --watch"
Runs the linter but passing the watch arg, meaning it'll re-lint every save
### "test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\""
Runs mocha against all javascript files that match the pattern name.test.js in the src folder, as well as running testSetup beforehand to transpile it.
### "test:watch": "npm run test -- --watch"
Runs mocha tests,p assing a watch flag meaning it'll re-run tests every save.
### "generate-mock-data": "babel-node buildScripts/mockDataGeneration/generateMockData"
Generates the mock data according to the schema
### "start:mockapi": "json-server --watch ./buildScripts/mockDataGeneration/db.json --port 3001"
Starts the mock data api using json-server utilising the data in db.json, generated from json-schema-faker
### "prestart:mockapi": "npm run generate-mock-data"
Runs the generate command before starting the server, for fresh new data.
### "clean-dist": "rimraf ./dist && mkdir dist"
Cleans the dist folder, deleting everything.
### "prebuild": "npm-run-all clean-dist test lint"
Runs the clean dist command, tests and linter.
### "build": "babel-node buildSCripts/build.js"
transpiles and runs the build.js file to start the webpack build process
### "postbuild": "babel-node buildScripts/distServer.js"
Runs the distribution build server.
