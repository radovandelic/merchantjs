var schema = {
    name: { //town name
        type: String,
        required: true
    },
    market: [{
        material: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }]
}

module.exports = schema;