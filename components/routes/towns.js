var mongoose = require("mongoose");
var Router = require("express").Router();
var Town = require("../models/town")

Router.get("/:town/prices", (req, res) => {
    Town.findOne({ name: req.params.town }, (err, town) => {
        res.json(town)
    })
})


module.exports = Router;