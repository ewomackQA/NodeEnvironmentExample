/* eslint-disable no-console */

//Dependencies
const express = require("express");
const path = require("path");
const open = require("open");
const port = 3000;
const app = express();

//Webpack config
import webpack from "webpack";
import config from "../webpack.config.dev";
const compiler = webpack(config);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//Default request to root, return index page.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

//Start server on set port
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        //Open the browser with the servers address
        open(`http://localhost:${port}`);
    }
});