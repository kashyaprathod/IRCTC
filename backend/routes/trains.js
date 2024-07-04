const express = require('express');
const Train = require('../models/Train');
const {
  getTrains,
  addTrain,
  updateTrain,
  deleteTrain,
  getTrain,
} = require('../controllers/trains');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.route('/').get(getTrains).post(authorize('admin'), addTrain);
router
  .route('/:id')
  .get(getTrain)
  .put(authorize('admin'), updateTrain)
  .delete(authorize('admin'), deleteTrain);

module.exports = router;
