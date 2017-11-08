var model = {
  db:
  [
    {
      material: "wood",
      price: 2.0
    },
    {
      material: "stone",
      price: 1.0
    },
    {
      material: "metal",
      price: 5.0
    }
  ],
  setNewPrice: function (commodity) {
    var price = this.getPrice(commodity)
    price = price + (Math.random() * price - Math.random() * price) / 10;
    this.setPrice(commodity, price);
  },
  getObject: function (commodity) {
    return this.db.find((object) => {
      return object.material == commodity;
    });
  },
  getPrice: function (commodity) {
    return +this.getObject(commodity).price.toFixed(2);
  },
  getAll: function () {
    return this.db;
  },
  setPrice: function (commodity, price) {
    this.getObject(commodity).price = price;
  }
};

module.exports = model;

/*model.setPrice("wood", 50000);
console.log(model.db[0].price);*/

/* for (var i = 0; i < 1000; i++) {
  console.log(i + 1 + '.11.2017.');
  console.log('  Metal price: ' + model.getPrice('metal'));
  console.log('  Wood price: ' + model.getPrice('wood'));
  model.setNewPrice("metal");
  model.setNewPrice("wood");
}
 */