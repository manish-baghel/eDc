/**
 * Created by manish on 28/10/17.
 */
var database = require('../Models/db_model');

module.exports = {
    home:home,
    login:login
}
function home(req,res){
    res.render('index');
}
function login(req,res){
    res.render(
        'login/login',
        {message: req.flash('loginMessage')}
    );
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
