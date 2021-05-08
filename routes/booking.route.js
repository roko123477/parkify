const express = require('express');
const Router = express.Router();
const bookingController = require('../controllers/booking.controller');
const IsLoggedInMiddleware=require('../middleware/login.middleware');
const sanitizerMiddleware=require('../middleware/sanitizer.middleware');

Router.route('/new')
    .get(bookingController.renderNewBooking)
    .post(bookingController.newBooking)
    
module.exports=Router;