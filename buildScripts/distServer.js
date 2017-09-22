/* This is not actually for production, this is used for hosting the production build.
         In reality you'd place the dist folder on a website.
         Although it's useful for debugging a production build
         since bugs can occur in the build process */

/* eslint-disable no-console */

//Dependencies
import express from "express";
import path from "path";
import open from "open";
import compression from "compression"

const port = 3000;
const app = express();

//Compression with GZIP
app.use(compression());
app.use(express.static("dist"));

// !!Not necessary for production!!
// //Webpack config
// import webpack from "webpack";
// import config from "../webpack.config.dev";
// import compiler = webpack(config);
// app.use(require("webpack-dev-middleware")(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));

//Default request to root, return index page.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

//generic api request
app.get("/users", (req, res) => {
    res.json([
        { "id": 1, "firstName": "Elliott", "lastName": "Womack", "email": "elliott@live.com" },
        { "id": 2, "firstName": "Dev", "lastName": "Gonsai", "email": "dev@live.com" },
        { "id": 3, "firstName": "Gareth", "lastName": "Davis", "email": "gareth@live.com" }
    ])
});

//Start server on set port
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        //Open the browser with the servers address
        open(`http://localhost:${port}`);
    }
});