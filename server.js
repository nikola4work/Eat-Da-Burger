// DEPENDACIES
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
// MAKE IT HEROKU FRIENDLY 
var PORT = process.env.PORT || 3030;

app.use(express.static("public"));
app.use(bodyParser.urlencoded((extended: true)));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout "main" }));
app.set("view engine", "handlebars");

// ROUTES
var routes = require("./controllers/burger_controller.js")
app.use(routes);



// MAKE SURE SERVER IS LISTENING 
app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
});