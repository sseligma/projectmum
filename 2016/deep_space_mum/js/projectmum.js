var data_path = "data";
	
var data;
var map;
var feedback; //should be part of data and be maintained in Drupal
var latitude = 42.377487;
var longitude = -71.087047;
var zoom = 18;

function loadMap(){
	    
  var mapOptions = {
	      center: new google.maps.LatLng(latitude,longitude),
	      zoom: zoom,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
  
  // Add Marker
  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(latitude,longitude),
    title:"Linwood St & Poplar St",
    map: map
  });
  
}

$( document ).ready(function() {

	$("#banner-text").click(function(){
		window.open(
				  'https://www.google.com/search?q=Retro-futurism&source=lnms&tbm=isch',
				  '_blank'
				);
	});
	
	// get Project MUM data
	//$.getJSON( "http://localhost/projectmum/?q=get_mum_data", function( data ) { 
	// mum_data.json will be created from a drupal cron job 

	//$.getJSON( data_path + '/mum_data.json', function( data ) {
	//	window.data = data;
	
		// map
	loadMap();
	    
	    // banner
	    //$("#banner-text").html(data.field_banner.und[0].value);

	    // location info
	    //$("#location_info").html(data.field_location_info.und[0].value);
	    
	    //DJs
	    /*
	    var djs_content = ""; 
	    var numDj = data.field_djs.length;
	    for (i = 0; i < numDj; i++) {
	    	djs_content += '<h2>' + data.field_djs[i].field_slot.und[0].value + ' ' + data.field_djs[i].field_contributor.title + '</h2>';
	    	djs_content += '<p><a href="' + data.field_djs[i].field_contributor.field_url.und[0].value + '" target="_blank" >' + data.field_djs[i].field_contributor.field_url.und[0].value + '</a></p>';

	    	djs_content += '<p>' + data.field_djs[i].field_bio.und[0].value + '</p>';	    	
	    	//data.field_djs[0].field_contributor.field_image.und[0].filename
	    }
	    $("#djs_content").html(djs_content);
	    */
	    
	    // Artists
	    /*
	    var artists_content = ""; 
	    var numArt = data.field_artists.length;
	    for (i = 0; i < numArt; i++) {
	    	artists_content += '<p><h2 style="display:inline" >' + data.field_artists[i].title + '</h2> by ' + data.field_artists[i].field_contributor.title + '</p>';
	    }
	    $("#artists_content").html(artists_content);
	    */
	    
	    // Sponsors
	    /*
	    var sponsors_content = '<table style="width:100%" ><tr>'; 
	    var numSponsor = data.field_sponsors.length;
	    for (i = 0; i < numSponsor; i++) {
	    	sponsors_content += '<td>'
	    		              + '<a href="' + data.field_sponsors[0].field_url.und[0].value + '" target="_blank" >'
	    		              + '<img class="img-responsive" src="' + data_path + '/' + data.field_sponsors[i].field_logo.und[0].filename + '" />'
	    		              + '</a>'
	    		              + '</td>';
	    }
	    sponsors_content += "</tr></table>"; 
	    $("#sponsors_content").html(sponsors_content);
        */

	        //team
            /*
	        var team_content = '<h2>' + data.title + ' Team</h2>'
                             + '<table style="width:100%" ><tr>';
            for (i = 0; i < data.field_team.length; i++) {
                team_content += '<td style="padding:5%" >' + data.field_team[i].title + '</td>';
            }
	    
            team_content += '</tr></table>';
            $("#team_content").html(team_content);
            */
	//});


	/*
	$.getJSON( data_path + '/feedback.json', function( data ) {
		window.feedback = data;
		var feedback_content = "";
	    var numFeedback = feedback.length;
	    for (i = 0; i < numFeedback; i++) {
	    	feedback_content += '<div class="feedback" >'
	    		              + '<strong>' + feedback[i].text + '</strong>'
	    		              + '<p>' + feedback[i].name + '</p>'
	    		              + '</div>';
	    }
	    
	    $("#feedback_content").html(feedback_content);
		
	});
	*/
	
	//$("#artists .container").css('height')
	//$("#artists .container").height();
	// set section heights equal to window height
    $("section").css('height',$(window).height());
    
	// add padding to all sections based on navbar height
    $("section").css('padding-top',$(".navbar-fixed-top").css('height'));

    $("section").css('padding-bottom',$("#footer").css('height'));

    // add extra padding to #main section for banner
/*
    var navbarHeight = $(".navbar-fixed-top").css('height');
    navbarHeight = navbarHeight.replace("px","");
    
    var bannerHeight =  $("#banner").css('height');
    bannerHeight = bannerHeight.replace("px","");
    
    var mainPaddingTop = navbarHeight + bannerHeight;
    alert(mainPaddingTop);
    
    $("#main").css('padding-top',mainPaddingTop + "px");
  */  
    //$(".container").css('width','100%');
   
    
    // smooth scrolling for anchor links
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
	
	/*
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
	*/
});
