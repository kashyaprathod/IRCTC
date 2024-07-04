const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
  },
  departureStation: {
    type: String,
    required: [true, 'Please add departure station'],
  },
  arrivalStation: {
    type: String,
    required: [true, 'Please add arrival station'],
  },
  departureTime: {
    type: String,
    required: [true, 'Please add name'],
  },
  arrivalTime: {
    type: String,
    required: [true, 'Please add name'],
  },
  price: {
    type: Number,
    required: [true, 'Please add price'],
  },
});

module.exports = mongoose.model('Train', TrainSchema);
