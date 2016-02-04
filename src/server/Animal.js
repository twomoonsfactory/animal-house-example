var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var animalSchema = new Schema({
    name: {type: String, required: true},
    species: {type: String, required: true},
    added: {type: Date, default: Date.now},
    history: [{
        year: {type: Number},
        month: {type: Number},
        day: {type: Number}
    }]
});

var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;