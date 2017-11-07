var db = require("../config/database")
var mongoose = require("mongoose");
var schema = require("./schema");

db.startDB();
var Town = mongoose.model("Town", schema);
module.exports = Town;

/*var wood = {
    material: "wood",
    price: 3.0
}
var stone = {
    material: "stone",
    price: 0.5
}
var steel = {
    material: "steel",
    price: 2.0
}

var t = {
    name: "Boulderspire",
    market: [wood, stone, steel]
}
Town.create(t).then(town => {
    console.log(JSON.stringify(town))
}).catch(err => console.log(err))*/
