

function init()
{
	console.log('pl');
	/*connection.query('SELECT * FROM form ',function(err,results,fields){
            console.log('hey there');
            console.log('results');
            if(err) throw err;
            result = parseIt(result);
            console.log(results);
        
    });*/
    $.post('http://localhost:4000/mem1')
    .done(function (data)
    {
        // console.log('hi');
        // console.log(data);
    	for(var i =0;i< Object.keys(data).length;i++)
    	{
    		console.log(data[i]);
    		var div = "";
    		div += '<div class="individual-intern"> <div class = "container-fluid">';
    		div += '<header> <div class="job-title">'+data[i].title+'</div></header>';
    		// div += '<div class="row"><div class="col-md-12">Location(s):<span class="location">';
            // div +=  data[i].location+'</span></div></div><div class="row"><div class="col-md-4 col-sm-4 col-xs-4">';
            // div += '                   <div class="title">';
            div += '<div class="row"><div class="col-md-2 col-sm-2 col-xs-2"><div class="title">Date</div>';
        	div += '<div class="content">'+data[i].start+'</div>';
            div += '</div><div class="work col-md-3 col-sm-3 col-xs-3"><div class="title">Profile</div>';
            div +='<div class="content">';
            div +=data[i].profile;
            div +='</div></div><div class="status col-md-2 col-sm-2 col-xs-2"><div class="title">Status</div><div class="content">';
            if(data[i].approved==0)
                div += "Not Approved yet";
            else
                div += "Approved";

            // div +=data[i].stipend;
            div +='</div></div><div class="col-md-3 col-sm-3 col-xs-3"><div class="title">Posted On</div><div class="content">';
            div +=data[i].posted_on;
            div +='</div></div><div class="col-md-2 col-sm-2 col-xs-2"><div class="title">Apply By</div><div class="content">15 Dec</div>';
            div +=  '</div></div><div class="row button-row"><div class="col-md-3 col-sm-4 col-xs-4 pull-right"><button class="pull-right">View Details</button></div></div></div></div>';

        document.getElementById('list').innerHTML+=div;
    	}
    });


  /*  var div = "";//="<section id='sidebar'> ";
div+= "<div id='pj' class='details'>";

div+= "<p class='hospiname'>"+ place.hospiname +"</p>";
div+= "<a class='phone' href=tel:"+place.phone+">"+place.phone+"</a>";
div+= "<p><a class='website' href =http://"+place.website+">Website</a></p>";
div+= "<p class='distance'>"+ place.distance + " KM</p>";


div+="</div>";
//div+="</section>";
document.getElementById('sidebar').innerHTML+=div;
*/

}