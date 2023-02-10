const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: True
    },
    description: {
        type: String,
        required: True
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Note', noteSchema);
