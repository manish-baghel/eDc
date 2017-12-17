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
var User = require('./backend/Models/user1.js')
//configuration fo node mailer ===============================================

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "edciitd2017@gmail.com",
        pass: "123qwerty123"
    }
});



// configuration  for mongo ===============================================================
// mongoose.connect(configDB.url); // connect to our database

// require('./backend/Models/passport')(passport); // pass passport for configuration



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
app.use(cookieParser());

// required for cookie session
app.use(session({ 
key:'user_sid',
secret: 'letthegamebegins',
resave:false,
saveUninitialized:false,
cookie:{
    expires:600000
} 

}));
// session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        console.log(req.session.user);
        res.redirect(req.session.user.Role);
    } else {
        next();
    }    
};

// =========================================================================
// authentication ======================  for user ===============
//==========================================================================

// route for user signup
app.route('/signup')
    .get(sessionChecker, (req, res) => {
        res.render('login/login.ejs');
    })
    .post((req, res) => {
        User.create({
            name: req.body.first_name,
            lastname: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            Role: 'member',
            verify: 0
        })
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('/member');
        })
        .catch(error => {
            res.redirect('/signup');
        });
    });

app.route('/signup1')
    .post((req, res) => {
        User.create({
            name: req.body.company_name,
            //lastname: req.body.last_name,
            email: req.body.email,
            Role : 'company',
            password: req.body.password,
            verify:0
        })
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('/company');
        })
        .catch(error => {
            res.redirect('/signup');
        });
    });

// route for user Login
app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.render('login/login.ejs');
    })
    .post((req, res) => {
        var email = req.body.email,
            password = req.body.password;

        User.findOne({ where: { email: email } }).then(function (user) {
            if (!user) {
                res.redirect('/login');
            } else if (!user.validPassword(password)) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect(req.session.user.Role);
            }
        });
    });


// route for user's dashboard
// app.get('/dashboard', (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//         res.sendFile(__dirname + '/public/dashboard.html');
//     } else {
//         res.redirect('/login');
//     }
// });


// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});


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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
        // app.post('/login',function(req,res,next){
        //     obj = {
        //         body: req.body
        //     }
        //     // console.log(obj);
        //     passport.authenticate('local-login',function(err ,user,info){
        //     if (err)
        //             return next(err);
        //         // if no user is found, return the message
        //         if (!user)
        //         {
        //             console.log("no user");
        //             return res.redirect('/login');//done(null, false, req.flash('loginMessage', 'No user found.'));
        //         }
        //         // all is well, return user
        //         console.log("something impr:  ");
        //         console.log(user);
        //         req.logIn(user, function(err) {
        //         if (err) { return next(err); }
        //         // Redirect if it succeeds
        //         return res.redirect('/' + user.local.role);
        //         });
        //     })(obj, res, next);
        // });

        // SIGNUP =================================
        // show the signup form
        // app.get('/signup', function(req, res) {
        // res.render('login/login.ejs', { message: req.flash('signupMessage') });
        // (function(){
        //     if(true)
        //     return; 
        // });;
        // });

        // process the signup form
//         app.post('/signup',function(req,res,next){
//             console.log("hi you at post signup");
//             passport.authenticate('local-signup',function(err,user,info) {
//                 console.log("you manage well");
//                 if (err)
//                     return next(err);
//                 // if no user is found, return the message
//                 console.log(user);
//                 if(user.local.verify == "not")
//                 checkEmail(user.local.email);
//                 res.redirect('/login');
//  /*               res.json({
//                     status:true,
//                     data:info,
//                     message:'user registered sucessfully'
//                 });
// */
//             })(req, res, next);                

//         });

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
app.listen(app.get('port'), function () {
    console.log('Application running in port '+ app.get('port'));
});