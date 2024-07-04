const Booking = require('../models/Booking');
const Train = require('../models/Train');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Create Booking
// @route   POST api/v1/booking/
// @access  Private / Customer
exports.createBooking = async (req, res, next) => {
  const userId = req.user._id;
  const { trainId, passengers } = req.body;
  try {
    const train = await Train.findById(trainId);
    if (!train) {
      return next(new ErrorResponse('Train Not Found', 404));
    }
    const totalPrice = passengers.reduce((total, passenger) => {
      return total + train.price;
    }, 0);

    const booking = await Booking.create({
      userId,
      trainId,
      passengers,
      totalPrice,
    });

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    return next(new ErrorResponse('Server Error', 500));
  }
};

// @desc    Get all bookings
// @route   GET api/v1/booking/
// @access  Private / Customer
exports.getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).populate(
      'trainId'
    );
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    return next(new ErrorResponse('Server Error', 500));
  }
};

// @desc    Delete a booking
// @route   DELETE api/v1/booking/:id
// @access  Private / Customer
exports.deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!booking) {
      return next(new ErrorResponse('Booking Not Found', 404));
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(new ErrorResponse('Server Error', 500));
  }
};
