var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dietHistorySchema = new Schema({
    day: Date,
    childrenEaten: {type: Number, min: 1}
});

module.exports = mongoose.model('DietHistory', dietHistorySchema);