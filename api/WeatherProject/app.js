
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// app.post("/", function(req, res){
//   console.log(req.body.city);
// });

app.post("/", function(req, res){
  // res.sendFile(__dirname + "/index.html");
  var city = req.body.city;
  const apiKey = "e7231e71bc5ecb45783dcaf7f3585887";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

  https.get(url, function(response){
    response.on("data", function(data){
      var wearherData = JSON.parse(data);
      var weatherDescription = wearherData.weather[0].description;
      var temp = wearherData.main.temp;
      var iconUrl = "http://openweathermap.org/img/wn/" + wearherData.weather[0].icon + "@2x.png";
      res.write("<img src = " + iconUrl + ">");
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The temperature in " + city + " is " + temp + " degrees Celcius</h1>");
      res.send();

    });

  });
});

app.listen(3000, function(){
  console.log("server running on port 3000");
});
