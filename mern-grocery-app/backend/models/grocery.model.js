const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grocerySchema = new Schema({
    name: { type: String, required: true}, 
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;