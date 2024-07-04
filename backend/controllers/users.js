const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all users
// @route   GET api/v1/users
// @access  Private / Admin
exports.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

// @desc    Get all users
// @route   GET api/v1/users/:id
// @access  Private / Admin
exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: user,
  });
};

// @desc    Update  user
// @route   PUT api/v1/auth/users/:id
// @access  Private / Customer
exports.updateUser = async (req, res, next) => {
  console.log(req.user);
  if (req.user.id !== req.params.id) {
    return next(new ErrorResponse('You are not authorized!', 403));
  }
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
};

// @desc    Delete  user
// @route   DELETE api/v1/auth/users/:id
// @access  Private / Customer
exports.deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(new ErrorResponse('You are not authorized!', 403));
  }
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
};
