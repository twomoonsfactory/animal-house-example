var mongoose = require('mongoose');
var DietHistory = require('./DietHistory');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
    name: {type: String, required: true},
    added: {type: Date, default: Date.now},
    history: [DietHistory]
});

module.exports = mongoose.model('Animal', animalSchema);