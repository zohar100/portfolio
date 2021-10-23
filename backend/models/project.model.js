const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    repository: {
        type: String,
        required: true,
        unique: true,
    },
    live: {
        type: String,
        required: false,
        unique: true,
    }
})

module.exports = model('Project', projectSchema);