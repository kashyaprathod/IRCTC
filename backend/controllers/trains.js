const Train = require('../models/Train');

// @desc    Get all trains
// @route   GET api/v1/trains
// @access  Public
exports.getTrains = async (req, res, next) => {
  const trains = await Train.find();
  res.status(200).json({
    success: true,
    count: trains.length,
    data: trains,
  });
};

// @desc    Get train
// @route   GET api/v1/trains/:id
// @access  Public
exports.getTrain = async (req, res, next) => {
  const train = await Train.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: train,
  });
};

// @desc    Add a train
// @route   POST api/v1/trains
// @access  Private / Admin
exports.addTrain = async (req, res, next) => {
  const {
    name,
    departureStation,
    arrivalStation,
    departureTime,
    arrivalTime,
    price,
  } = req.body;

  const train = await Train.create({
    name,
    departureStation,
    arrivalStation,
    departureTime,
    arrivalTime,
    price,
  });

  console.log(train);

  res.status(200).json({
    success: true,
    data: train,
  });
};

// @desc    Update Train
// @route   PUT api/v1/trains/:id
// @access  Private / Admin
exports.updateTrain = async (req, res, next) => {
  const train = await Train.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    data: train,
  });
};

// @desc    Delete Train
// @route   DELETE api/v1/trains/:id
// @access  Private / Admin
exports.deleteTrain = async (req, res, next) => {
  await Train.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
};
