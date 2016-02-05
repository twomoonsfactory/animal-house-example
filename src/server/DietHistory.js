var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dietHistorySchema = new Schema({
    day: Date,
    pizzarenEaten: {type: Number, min: 1}
});

module.exports = dietHistorySchema;