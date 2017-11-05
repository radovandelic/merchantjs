var express = require("express");
var app = express();
var compress = require('compression');
app.use(compress());

var port = process.env.PORT || 3000;
app.set('port', port);

// set up a static server
app.use(express.static("build"));

// set up error middleware
app.use(function (req, res) {
    res.statusCode = 404;
    res.end("Page doesn't exist");
});

// set up server
app.listen(port, () => {
    console.log("App is listening on port " + port);
});