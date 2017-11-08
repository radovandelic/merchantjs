var schema = {
    username: { //username
        type: String,
        required: false
    },
    money: {
        type: Number,
        required: true,
        default: 0
    },
    inventory: [{
        material: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
}

module.exports = schema;