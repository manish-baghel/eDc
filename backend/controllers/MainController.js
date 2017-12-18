/**
 * Created by manish on 28/10/17.
 */
var database = require('../Models/db_model');
var connection = require('../../config');
var nodemailer = require('nodemailer');

//creating smtp transport
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "edciitd2017@gmail.com",
        pass: "123qwerty123"
    }
});

module.exports = {
    home:home,
    login:login,
    admin:admin,
    member:member,
    company:company,
    companyinternform:companyinternform,
    mail:mail,
    companyPost:companyPost,
    logout:logout,
    adminpost:adminpost,
    admin1post:admin1post,
    mem:mem,
    send:send,
    signup:signup,
    loginpost:loginpost,
    companyforms:companyforms,
    verify: verify
}

//==========================================================
//========== get request handling==========================
//==========================================================
function home(req,res){
    res.render('index.ejs', {
        user:req.session.user
    });
}
function login(req,res){
    res.render(
        'login/login.ejs',
        {
            user:req.session.user,
            message: req.flash('loginMessage')
        }
    );
}
function signup(req, res) {
res.render(
    'login/login.ejs',
     {message: req.flash('signupMessage')}
     );
// (function(){
//     if(true)
//     return; 
// });;
};
function admin(req,res,next){
    // requireRole(req,res,next,'admin');
    if(sessionChecker(req,res,next,'admin'))
    res.render('other/admin.ejs',{
        user: req.session.user
    });
}
function company(req,res,next){
    // requireRole(req,res,next,'company');
    // if(sessionChecker(req,res,next,'company'))
    res.render('company/company.ejs',{
        user:req.session.user
    });
}
function member(req,res,next){
    // requireRole(req,res,next,'member');
    // if(sessionChecker(req,res,next,'member'))
    res.render('user/intern_listing.ejs',{
        user:req.session.user
    });
}
function companyinternform(req,res,next){
    // requireRole(req,res,next,'company');
    if(sessionChecker(req,res,next,'company'))
    res.render('company/postIntern.ejs',{
        user:req.session.user
    })
}
function send(req,res){

    var mailOptions={
       to : req.query.to,
       subject : req.query.subject,
       text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }
        else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

};

//========= Logout ==================================
function logout(req,res){
    req.logout();
    res.redirect('/');
}

//==========================================================
//============ SPECIAL GET REQUEST =========================
//==========================================================
function mail(req,res){
    res.render('other/mail.ejs');
}
function verify(req,res){
    var email = req.query.id.split(",")[0];
    connection.query('UPDATE users SET verify="1" where email = ?',email,function(err,results,fields){
        console.log('hey there');
        console.log('results');
        var result;
        if(err) throw err;
        result = parseIt(results);

        console.log(results);
        return res.redirect('/admin');
    });
}
//===========================================================
//========= checks role of user =============================
//===========================================================
function requireRole(req,res,next,role) {    
    console.log(req.user);
    if(typeof req.user != "undefined")
    { 
        if ( req.user.local.role === role) {
            // do nothing
        } else {
            res.redirect('/'+req.user.local.role);
        }
    }else
    {
        res.redirect('/login');
    }
}

var sessionChecker = (req, res, next,role) => {
    if (req.session.user && req.cookies.user_sid) {
        if(req.session.user.Role === role)
        {
            if(req.session.user.verify=== 0){
                req.session.user = null;
                res.redirect('/login');
                // res.clearCookie('user_sid');
                return false;
            }
            else
            {
                return true;
            }
            
        }
        else
        {
            res.redirect(req.session.user.Role);
            return false;
        }
    } else {
        res.redirect('/login');
        return false;
        // next();
    }    
};


//==========================================================
//================ POST REQUEST ============================
//==========================================================
function companyPost(req,res,next){
    var perk="";
    if(req.body.certificate="on")
    perk += "certificate";
    if(req.body.lor="on")
    perk +=",letter of recommendation";
    if(req.body.flexible="on")
    perk +=',felxible work hours';
    if(req.body.job='on')
    perk +='preplacement offer';
    var today = new Date();
    var form = {
        company: req.session.user.name,
        title: req.body.job_title,
        profile: req.body.profile_primary,
        openings: req.body.open_positions,
        location:req.body.location,
        discription: req.body.description,
        jobType:req.body.type,
        end:req.body.start_date_2,
        start: req.body.start_date_1,
        applyby:req.body.last_date,
        Stipend: req.body.salary,
        perks: perk,
        skills: req.body.skill,
        posted_on:today
    }
    // console.log(req.session);
   // console.log('INSERT INTO form SET '+ form);
    var query = connection.query('INSERT INTO form SET ?',form,function(err,results,fields){
        if(err){
            res.json({
                status:false,
                message:'failed form insertion',
                'form': form
            })
        }else{
            res.json({
                status:true,
                data:results,
                message:'form iserted'
            })
        }
    });
 //   console.log(query.sql);
}

function mem(req,res){
    connection.query('SELECT * FROM form where approved = "1"',function(err,results,fields){
    console.log('hey there');
    console.log('results');
    var result;
    if(err) throw err;
    result = parseIt(results);

    console.log(results);
    return res.json(result);
    });
};

function companyforms(req,res){
    connection.query('SELECT * FROM form',function(err,results,fields){
    console.log('hey there');
    console.log('results');
    var result;
    if(err) throw err;
    result = parseIt(results);

    console.log(results);
    return res.json(result);
    });
};

function admin1post(req,res){
    console.log(req.body);
    connection.query('UPDATE form SET approved="1" where form_id = ?',req.body.form_id,function(err,results,fields){
        console.log('hey there');
        console.log('results');
        var result;
        if(err) throw err;
        result = parseIt(results);

        console.log(results);
        return res.redirect('/admin');
});
}
function adminpost(req,res){
        connection.query('SELECT * FROM form where approved = "0"',function(err,results,fields){
        console.log('hey there');
        console.log('results');
        var result;
        if(err) throw err;
        result = parseIt(results);

        console.log(results);
        return res.json(result);
});
}
function loginpost(req,res,next){
    console.log(req.body);
    // SELECT * FROM `users` WHERE `email` = 'sunilssaharan@gmail.com' 
    connection.query("SELECT * FROM `users` WHERE `email` = "+'\''+req.body.email+'\''+" AND `password` = "+'\''+req.body.password+'\'',function(err,results,fields){
    console.log('hey there');
    console.log('results');
    var result;
    if(err) throw err;
    result = parseIt(results);
    if(!Object.keys(results).length==0)
    {
        if(!results[0].verified==0)
        {

        }
        else
        {
            var user = results[0];
            console.log(results[0]+'\n\n');
            req.logIn(user,function(err)
            {
                if(err){
                    // return next(err);
                }
                
            });
            res.redirect('/'+results[0].role);
            
        }
    }
    else
    {
        res.redirect('/login');
    }

    });   
}



function ambulancePost(req, res){
    var data = req.body;
    if(data.signal == 0)
    {
    var query = makeQuery(data);
    var out = database.getDataFromTable(
         query,
        function(err,result){
            if(err) throw err;
            result = parseIt(result);
            console.log(result);
           return res.json(result);
        }
    );
    }
    else
    {
        var query = " Select * from ambivan";
        console.log(query);
        var out = database.getDataFromTable(
         query,
        function(err,result){
            if(err) throw err;
            result = parseIt(result);
            console.log(result);
           return res.json(result);
        }
    );
    }
}
function postform(req,res,next){
    console.log(req.body);
    var query = 'Insert INTO `form` (`name` , `email` , `phone` , `message`) VALUES(' +'\''+req.body.name+'\''+','+'\''+req.body.email+'\''+','+'\''+req.body.phone+'\''+','+'\''+req.body.message+'\''+')';
    console.log(query);
    var out = database.getDataFromTable(query,function(err,result){
        if(err) throw err;
        else
        {
            console.log("form submitted");
            res.redirect('/');
        }
    });
}
function makeQuery(data){
    var sw_lat = data.SW.lat;
    var ne_lat = data.NE.lat;
    var sw_lng = data.SW.lng;
    var ne_lng = data.NE.lng;
    console.log(sw_lng+ne_lng);
    var query ;//= "SELECT * FROM ambivan";
    if (sw_lng <= ne_lng)
    {
        // doesn't cross the antimeridian
        query = 'SELECT * FROM places WHERE '+sw_lat+' <= latitude AND latitude <= '+ne_lat+' AND ('+sw_lng+' <= longitude AND longitude <= '+ne_lng+')';
    }
    else
    {
        // crosses the antimeridian
        query = 'SELECT * FROM places WHERE '+sw_lat+' <= latitude AND latitude <= '+ne_lat+' AND ('+sw_lng+' <= longitude OR longitude <= '+ne_lng+')';
    }
    console.log(query);
    return query;
}
function parseIt(rawData){
    rawData = JSON.stringify(rawData);
    rawData = JSON.parse(rawData);
    return rawData;
}
