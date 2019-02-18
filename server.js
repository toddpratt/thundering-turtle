const express = require('express')
const request = require('request')
const app = express()

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (request, response) => {
  response.setHeader('Content-Type: text/plain');
  response.send("OK");
});

app.get("/forecast", (request, response) => {
  response.write(
    request.get({
      uri: process.env.FORECAST_API,
      qs: {
        q: "dracut,us"
      }
    })
  );
})

