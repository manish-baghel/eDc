/**
 * Created by manish on 6/9/17.
 */
var express = require('express');
var mainController = require('../controllers/MainController');
var router = express.Router();
var app = require('../../ApplicationInstance');


//===============================================================
//================== NORMAL GET REQUEST ROUTER ========================
//===============================================================

router.route('/').get(mainController.home);
router.route('/login').get(mainController.login);
router.route('/admin').get(mainController.admin);
router.route('/member').get(mainController.member);
router.route('/company').get(mainController.company);
router.route('/company/postintern').get(mainController.companyinternform);
//==============================================================
//================  SPECIAL GET REQUEST ========================
//================ NOT TO BE USED =============================
//=============================================================
router.route('/mail').get(mainController.mail);


//==============================================================
//================== POST REQUEST ROUTER =======================
//==============================================================

module.exports = router;
