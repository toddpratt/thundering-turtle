const express = require('express');
const request = require('request-promise-native');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('/ui/build/'))

app.get("/forecast", (req, res) => {
  res.header('Content-Type: application/json');
  request.get({
    uri: process.env.FORECAST_URI,
    qs: {q: req.query.city, appid: process.env.API_KEY},
    json: true
  })
  .then(result => {
    res.send({
      status: "OK",
      data: result
    });
  })
  .catch(err => {
    res.send({
      status: "ERROR",
      error: err
    })
  });
})

app.listen(process.env.PORT);
