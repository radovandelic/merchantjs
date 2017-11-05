var model = {
    prices: {
        wood: 2.0,
        stone: 1.0,
        metal: 5.0
    },
    getNewPrice: function (commodity) {
        price = this.prices[commodity];
        price = price + (Math.random() * price / 4 - Math.random() * price / 4)
        this.prices[commodity] = price;
        return +price.toFixed(2);
    },
    getPrice: function (commodity) {
        return this.prices[commodity];
    },
    getAll: function () {
        return prices;
    },
    setPrice: function (commodity, price) {
        this.prices[commodity] = price;
    }
}

module.exports = model;