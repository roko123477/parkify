const express = require('express');
const Router = express.Router();
const userController = require('../controllers/user.controller');
const IsLoggedInMiddleware=require('../middleware/login.middleware');
const sanitizerMiddleware=require('../middleware/sanitizer.middleware');

Router.route('/register')
    .get(userController.renderRegister)
    .post(sanitizerMiddleware(),userController.register)

Router.route('/login')
    .get(userController.renderLogin)
    .post(sanitizerMiddleware(),userController.login)

Router.route('/dashboard')    
    .get(IsLoggedInMiddleware(),userController.renderDashboard)

module.exports=Router;