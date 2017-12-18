var mysql      = require('mysql');
var connection = mysql.createConnection({
host     : process.env.RDS_HOSTNAME,
user     : process.env.RDS_USERNAME,
password : process.env.RDS_PASSWORD,
database : 'edc',
port     : process.env.RDS_PORT
});


module.exports = {
    getDataFromTable: function(query,callback)
    {
        connection.query(query, 
            function(err,result,fields){
                if (err) return callback(err, null);
                return callback(null, result);
            }
        );  
    },
}
