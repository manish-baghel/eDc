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
// router.route('/login').get(mainController.login);
router.route('/admin').get(mainController.admin);
router.route('/member').get(mainController.member);
router.route('/company').get(mainController.company);
router.route('/company/postintern').get(mainController.companyinternform);
// router.route('/logout').get(mainController.logout);
router.route('/send').get(mainController.logout);
// router.route('/signup').get(mainController.signup);
//==============================================================
//================  SPECIAL GET REQUEST ========================
//================ NOT TO BE USED =============================
//=============================================================
router.route('/mail').get(mainController.mail);
router.route('/verify').get(mainController.verify);


//==============================================================
//================== POST REQUEST ROUTER =======================
//==============================================================
router.route('/companyPost').post(mainController.companyPost);
router.route('/mem').post(mainController.mem);
router.route('/mem1').post(mainController.companyforms)
router.route('/admin').post(mainController.adminpost);
router.route('/admin1').post(mainController.admin1post);
// router.route('/login').post(mainController.loginpost);

module.exports = router;
