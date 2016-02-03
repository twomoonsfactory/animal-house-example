var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
    name: String,
    added: Date,
    history: [{type: Schema.Types.ObjectId, ref:'DietHistory'}]
});

module.exports = mongoose.model('Animal', animalSchema);