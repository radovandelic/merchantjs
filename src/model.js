var model = {
    prices: {
        wood: 2.0,
        stone: 1.0,
        metal: 5.0
    },
    getNewPrice: function (commodity) {
        var price = this.prices[commodity];
        price = price + (Math.random() * price / 4 - Math.random() * price / 4);
        this.prices[commodity] = price;
        return +price.toFixed(2);
    },
    getPrice: function (commodity) {
        return +this.prices[commodity].toFixed(2);
    },
    getAll: function () {
        return this.prices;
    },
    setPrice: function (commodity, price) {
        this.prices[commodity] = price;
    }
};

module.exports = model;

/* for (var i = 0; i < 10; i++) {
    console.log(i + 1 + '.11.2017.');
    console.log('  Metal price: ' + model.getNewPrice('metal'));
    console.log('  Wood price: ' + model.getNewPrice('wood'));
}
 */