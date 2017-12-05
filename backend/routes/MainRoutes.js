/**
 * Created by manish on 6/9/17.
 */
var express = require('express');
var mainController = require('../controllers/MainController');
var router = express.Router();
var app = require('../../ApplicationInstance');


router.route('/').get(mainController.home);
router.route('/login').get(mainController.login);
//router.route('/ambulance/getAmbulance').get(mainController.getAmbulance);
//router.route('/ambulance').post(mainController.ambulancePost);
//router.route('/').post(mainController.postform);

module.exports = router;



//Sample Route
//
//router.param('user_id', function(req, res, next, id) {
//  // sample user, would actually fetch from DB, etc...
//  req.user = {
//    id: id,
//    name: 'TJ'
//  };
//  next();
//});
//
//router.route('/users/:user_id')
//.all(function(req, res, next) {
//  // runs for all HTTP verbs first
//  // think of it as route specific middleware!
//  next();
//})
//.get(function(req, res, next) {
//  res.json(req.user);
//})
//.put(function(req, res, next) {
//  // just an example of maybe updating the user
//  req.user.name = req.params.name;
//  // save user ... etc
//  res.json(req.user);
//})
//.post(function(req, res, next) {
//  next(new Error('not implemented'));
//})
//.delete(function(req, res, next) {
//  next(new Error('not implemented'));
//})