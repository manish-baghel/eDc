var express = require('express');
// for mailing
var nodemailer = require('nodemailer');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = require('./ApplicationInstance');
var passport = require('passport');
var mongoose = require('mongoose');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var configDB = require('./backend/Models/database.js');
var compression = require('compression');
var _ = require("underscore");
var mainRoutes = require('./backend/routes/MainRoutes');
var connection = require('./config');

//configuration fo node mailer ===============================================

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "sunilssaharan@gmail.com",
        pass: "pqwGBCFM"
    }
});


// configuration  for mongo ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./backend/Models/passport')(passport); // pass passport for configuration



app.use(logger('dev'));
app.use(compression());
app.use(express.static(path.resolve(__dirname, 'client')));
//app.use('/courses', express.static(path.resolve(__dirname, 'client')));
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', __dirname + '/client/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// required for passport
app.use(session({ secret: 'letthegamebegins' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// =========================================================================
// mailing function ======================  for email verify ===============
//==========================================================================

    function checkEmail( to)
    {
        
        link="http://localhost:4000/verify?id="+to+",di=jock";
        mailOptions={
            to : to,
            subject : "Please confirm your Email account",
            html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
        }
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
         if(error){
            console.log(error);
            res.end("error");
         }else{
            console.log("Message sent: " + response.message);
               // res.redirect('/login');
            res.end("sent");
             }
        });
    }

app.use('/', mainRoutes);
// normal routes ===============================================================


    function parseIt(rawData){
    rawData = JSON.stringify(rawData);
    rawData = JSON.parse(rawData);
    return rawData;
}

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });



/*
    app.post('/',function(req,res,next){
        console.log(req.body);
    });
*/
    app.get('/verify',function(req,res,next){
        obj = {
            body: { email:req.query.id.split(",")[0],
            password: "hi there"
        }}

        passport.authenticate('local-verify',function(err ,user,info){

        if (err)
                return next(err);
            // if no user is found, return the message
            if (!user)
                return res.redirect('/login');//done(null, false, req.flash('loginMessage', 'No user found.'));

            console.log(user);
            req.logIn(user, function(err) {
            if (err) { return next(err); }
            // Redirect if it succeeds
            return res.redirect('/' + user.local.role);
            });

        })(obj, res, next);
    });


// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
   /*     app.get('/login', function(req, res) {
            // console.log(res);
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });
*/
        // process the login form
        app.post('/login',function(req,res,next){
            obj = {
                body: req.body
            }
            console.log(obj);
            passport.authenticate('local-login',function(err ,user,info){
            if (err)
                    return next(err);
                // if no user is found, return the message
                if (!user)
                {
                    console.log("no user");
                    return res.redirect('/login');//done(null, false, req.flash('loginMessage', 'No user found.'));
                }
                // all is well, return user
                console.log(user);
                req.logIn(user, function(err) {
                if (err) { return next(err); }
                // Redirect if it succeeds
                return res.redirect('/' + user.local.role);
                });
            })(obj, res, next);
        });

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
        res.render('login/login.ejs', { message: req.flash('signupMessage') });
        (function(){
            if(true)
            return; 
        });;
        });

        // process the signup form
        app.post('/signup',function(req,res,next){
            console.log("hi you at post signup");
            passport.authenticate('local-signup',function(err,user,info) {
                console.log("you manage well");
                if (err)
                    return next(err);
                // if no user is found, return the message
                console.log(user);
                if(user.local.verify == "not")
                checkEmail(user.local.email);
                res.redirect('login/login');
 /*               res.json({
                    status:true,
                    data:info,
                    message:'user registered sucessfully'
                });
*/
            })(req, res, next);                

        });

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/admin', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

function requireRole (role) {
    return function (req, res, next) {
       // var str = JSON.stringify(req.user);
//       var str = JSON.stringify(req.user.local.role, null, 4)

  //      console.log(str);
        console.log(req.user);
        if(typeof req.user != "undefined")
        { 
           // console.log(req.user);
            if ( req.user.local.role === role) {
              //res.send(403);
                //res.redirect('/login');
                next();
            } else {
                //next();
                res.redirect('/'+req.user.local.role);
            }
        }else
        {
            res.redirect('/login');
        }
    }
}









app.listen(app.get('port'), function () {
    console.log('Application running in port '+ app.get('port'));
});