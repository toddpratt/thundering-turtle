const express = require('express')
const request = require('request-promise-native')
const app = express()

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (request, response) => {
  response.header('Content-Type: text/plain');
  response.send("OK");
});

app.get("/forecast", (request, response) => {
  res.header('Content-Type: application/json');
  const options = {
    uri: process.env.FORECAST_URI,
    qs: {
      q: "dracut,us",
      appid: process.env.API_KEY
    },
    json: true
  }
  console.log(options);
  request.get(options).then(result => {
  });
})

app.listen(process.env.PORT);
