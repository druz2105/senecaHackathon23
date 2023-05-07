const express = require("express");
const {indexPage, checkURL} = require("./views");


const appRouter = express.Router();
appRouter.route('').get(indexPage)
appRouter.route('/checkUrl').post(checkURL)
module.exports = {appRouter};