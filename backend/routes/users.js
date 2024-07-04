const express = require('express');
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

//Only Admins can get a single user or all the users
router.route('/').get(authorize('admin'), getUsers);
router
  .route('/:id')
  .get(authorize('admin'), getUser)
  .put(authorize('customer'), updateUser)
  .delete(authorize('customer'), deleteUser);

module.exports = router;
