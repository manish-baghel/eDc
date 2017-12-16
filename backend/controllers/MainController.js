/**
 * Created by manish on 28/10/17.
 */
var database = require('../Models/db_model');
var connection = require('../../config');

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
    mem:mem
}

//==========================================================
//========== get request handling==========================
//==========================================================
function home(req,res){
    res.render('index.ejs');
}
function login(req,res){
    res.render(
        'login/login',
        {message: req.flash('loginMessage')}
    );
}
function admin(req,res,next){
    // requireRole(req,res,next,'admin');
    res.render('other/admin.ejs');
}
function company(req,res,next){
    // requireRole(req,res,next,'company');
    res.render('company/company.ejs');
}
function member(req,res,next){
    requireRole(req,res,next,'member');
    res.render('user/intern_listing.ejs');
}
function companyinternform(req,res,next){
    // requireRole(req,res,next,'company');
    res.render('company/postIntern.ejs')
}
//========= Logout ==================================
function logout(req,res){
    req.logout();
    req.redirect('/');
}

//==========================================================
//============ SPECIAL GET REQUEST =========================
//==========================================================
function mail(req,res){
    res.render('other/mail.ejs');
}

//===========================================================
//========= checks role of user =============================
//===========================================================
function requireRole(req,res,next,role) {    
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
        profile: req.body.profile_primary,
        openings: req.body.open_positions,
        location:req.body.location,
        discription: req.body.description,
        jobType:req.body.type,
        end:req.body.start_date_2,
        start: req.body.start_date_1,
        Stipend: req.body.salary,
        perks: perk,
        skills: req.body.skill,
        posted_on:today
    }

   console.log('INSERT INTO form SET '+ form);
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
    connection.query('SELECT * FROM form ',function(err,results,fields){
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
};
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
};




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
