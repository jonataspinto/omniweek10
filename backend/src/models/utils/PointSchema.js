const mongoose = require('mongoose');

const PointSchema = mongoose.Schema({
    type:{
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates:{
        type: [Number],
    }
})

module.exports = PointSchema;
