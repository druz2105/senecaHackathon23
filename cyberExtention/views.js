const axios = require('axios');
const e = require("express");
const {PhishingWebsiteData} = require("./url.model");
const {readFileSync} = require("fs");
require('dotenv').config();


const indexPage = async (request, response) => {
    const index = readFileSync(`${__dirname}/assets/index.html`, 'utf-8');

    return response.end(index)
}

const fetchData = (url) => {
    const static = readFileSync(`${__dirname}/static.json`, 'utf-8');
    const staticObj = JSON.parse(static);
    let data = new PhishingWebsiteData()
    data = data.toJson()
    staticObj.forEach(el => {
        if (el.url === url) {
            delete el.url;
            delete el.status;
            data = el
        } else {
            const l = null;
        }
    })
    return data
}


const checkURL = async (request, response) => {
    const url = request.body.url
    const data = fetchData(url)
    console.log(data)
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://mgf4wr2hcb.execute-api.ca-central-1.amazonaws.com/development/',
        headers: {
            'X-API-Key': process.env.X_API_KEY, 'conte': 'application/json', 'Content-Type': 'application/json'
        },
        data: data
    };

    const apiResponse = await axios.request(config)
    return response.json(apiResponse.data)
}

module.exports = {indexPage, checkURL}