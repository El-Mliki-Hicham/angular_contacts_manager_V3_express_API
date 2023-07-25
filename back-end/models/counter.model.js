const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 1 }
});

const CounterModel = mongoose.model('Counter', counterSchema);

module.exports = CounterModel;
