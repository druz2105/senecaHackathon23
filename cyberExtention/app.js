const express = require('express');
const {appRouter} = require("./routers");
const {urlencoded} = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan());
app.use('/assets',express.static(__dirname + '/assets'));
app.use(urlencoded({extended: false}));
app.use('', appRouter);
module.exports = app;
