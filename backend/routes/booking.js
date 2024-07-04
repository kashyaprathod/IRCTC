const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const {
  createBooking,
  getBookings,
  deleteBooking,
} = require('../controllers/booking');

const router = express.Router();

router.use(protect);
router.use(authorize('customer'));

router.route('/').get(getBookings).post(createBooking);
router.route('/:id').delete(deleteBooking);

module.exports = router;
