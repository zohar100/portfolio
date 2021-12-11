const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    technologies: [{
        type: String,
    }],
    image: {
        type: String,
        required: false
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