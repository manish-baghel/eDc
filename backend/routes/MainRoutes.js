/**
 * Created by manish on 6/9/17.
 */
var express = require('express');
var mainController = require('../controllers/MainController');
var router = express.Router();
var app = require('../../ApplicationInstance');


//===============================================================
//==================  GET REQUEST ROUTER ========================
//===============================================================

router.route('/').get(mainController.home);
router.route('/login').get(mainController.login);
router.route('/admin').get(mainController.admin);
router.route('/member').get(mainController.member);
router.route('/company').get(mainController.company)
//==============================================================
//================== POST REQUEST ROUTER =======================
//==============================================================

module.exports = router;
