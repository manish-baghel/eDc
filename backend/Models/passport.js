// load all the things we need
var LocalStrategy    = require('passport-local').Strategy;


// load up the user model
var User       = require('./user');

// load the auth variables
//var configAuth = require('./auth'); // use this one for testing

module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        if (email)
            email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            User.findOne({ 'local.email' :  email }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);
                // if no user is found, return the message
                if (!user)
                    return done(null, false, ('loginMessage', 'No user found.'));

                if (!user.validPassword(password))
                    return done(null, false, ('loginMessage', 'Oops! Wrong password.'));

                // all is well, return user
                else
                {
                    if(user.local.verify == "not")
                        return done(null,false);
                        return done(null,user);
//                    return done(null, user);
                }
            });
        });

    }));

    //==========================================================================
    //========   verification ==================================================
    //==========================================================================
        passport.use('local-verify', new LocalStrategy({
        // by default, local straty uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email,password, done) {
      //  console.log(req);
        if (email)
            email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
        
        // asynchronous
        process.nextTick(function() {
            User.findOne({ 'local.email' :  email }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);
                // if no user is found, return the message
          //      console.log(user);
                if (!user)
                {
                    console.log("i was here");
                    return done(null, false, ('loginMessage', 'No user found.'));
                }
                else
                {
                    user.local.verify = 'yes';    
                    user.save(function (err) {
                    if (err)
                        return done(err);          
                        return done(null,user);
                    });
       
                    console.log(user);
                }
                // all is well, return user
                
                    //return done(null, user);
            });
        });


    }));    

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        if (email)
            email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            // if the user is not already logged in:
            if (!req.user) {
                User.findOne({ 'local.email' :  email }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, user, ('signupMessage', 'That email is already taken.'));
                    } else {

                        // create the user
                        var newUser            = new User();

                        console.log("going well");
                        newUser.local.email    = email;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.local.role = req.body.role;
                        newUser.save(function(err) {
                            if (err)
                                return done(err);

                            return done(null, newUser);
                        });
                    }

                });
            // if the user is logged in but has no local account...
            } else if ( !req.user.local.email ) {
                // ...presumably they're trying to connect a local account
                // BUT let's check if the email used to connect a local account is being used by another user
                User.findOne({ 'local.email' :  email }, function(err, user) {
                    if (err)
                        return done(err);
                    
                    if (user) {
                        return done(null, false, ('loginMessage', 'That email is already taken.'));
                        // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
                    } else {
                        var user = req.user;
                        user.local.email = email;
                        user.local.password = user.generateHash(password);
                        newUser.local.role = req.body.role;
                        user.save(function (err) {
                            if (err)
                                return done(err);
                            
                            return done(null,user);
                        });
                    }
                });
            } else {
                // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
                return done(null, req.user);
            }

        });

    }));

   

};

