# NodeEnvironmentExample
## Current Setup
* Express serving a static html file.
* Webpack bundling the src directory together
* ESLint configured
* babel transpiling (Able to utilise es7)
* nsp installed and configured
* localtunnel installed and configured
* mocha/chai/jsdom tests setup
* basic hard-coded api setup
## npm scripts
### "start": "npm-run-all --parallel security-check run:server lint:watch"
Starts the server, runs a security check, runs eslint on watch mode
### "run:server": "babel-node buildScripts/srcServer.js",
Transpiles and runs the server
### "share": "npm-run-all --parallel security-check run:server localtunnel "
Same as start however also runs localtunnel to provide a url
### "localtunnel": "lt --port 3000"
Starts localtunnel on any server to port 3000
### "security-check": "nsp check",
Runs the nsp package for package security analysis
### "lint": "esw webpack.config.* src buildScripts"
Runs eslint to scan files in the src and buildScripts folders
### "lint:watch": "npm run lint -- --watch"
Runs the linter but passing the watch arg, meaning it'll re-lint every save
### "test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\"",
Runs mocha against all javascript files that match the pattern name.test.js in the src folder, as well as running testSetup beforehand to transpile it.
### "test:watch": "npm run test -- --watch"
Runs mocha tests,p assing a watch flag meaning it'll re-run tests every save.



