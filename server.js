var express = require("express");
var app = express();
var compress = require('compression');
app.use(compress());

var model = require("./src/model")

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = process.env.PORT || 3001;
app.set('port', port);

// set up a static server
app.use(express.static("build"));

app.get("/price/:material", (req, res) => {
    console.log(model.prices[req.params.material]);
    res.json(model.prices[req.params.material]);
})

// set up error middleware
app.use(function (req, res) {
    res.statusCode = 404;
    res.end("Page doesn't exist");
});


// set up server
app.listen(port, () => {
    console.log("App is listening on port " + port);
});