var mongoose = require("mongoose");
var Router = require("express").Router();
var User = require("../models/user")

Router.get("/:user/inventory", (req, res) => {
    User.findOne({ name: req.params.user }, (err, user) => {
        res.json(user)
    })
})

module.exports = Router;