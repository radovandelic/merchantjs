var express = require("express");
var app = express();
var routes = require("./components/routes/routes");
var compress = require('compression');
app.use(compress());

//var interval = setin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = process.env.PORT || 3001;
app.set('port', port);

// set up a static server
app.use(express.static("build"));

app.use("/", routes);
// set up error middleware
app.use(function (req, res) {
    res.statusCode = 404;
    res.end("Page doesn't exist");
});


// set up server
app.listen(port, () => {
    console.log("App is listening on port " + port);
});