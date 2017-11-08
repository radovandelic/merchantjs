var db = require("../config/database")
var mongoose = require("mongoose");
var schema = require("./townSchema");

db.startDB();
var Town = mongoose.model("Town", schema);
/*Town.setNewPrice = function (commodity) {
    var price = this.(commodity)
    price = price + (Math.random() * price - Math.random() * price) / 10;
    this.setPrice(commodity, price);
}*/
module.exports = Town;


/*var wood = {
    material: "wood",
    price: 1.0
}
var stone = {
    material: "stone",
    price: 1.0
}
var steel = {
    material: "steel",
    price: 15.0
}

var t = {
    name: "swampshire",
    market: [wood, stone, steel]
}
Town.create(t).then(town => {
    console.log(JSON.stringify(town))
}).catch(err => console.log(err))*/
