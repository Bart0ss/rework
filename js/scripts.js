
var map;     

function  url()
{
	window.location.href = "index.html";
}

function setValues(value)
{
	document.getElementById("counter").innerHTML = "<font color='black'>" + value + "%" + '</font>';
	document.getElementById("counter1").innerHTML = "<font color='black'>" + value + '</font>';
	document.getElementById("counter2").innerHTML = "<font color='black'>" + value + "%" + '</font>';
	document.getElementById("counter3").innerHTML = "<font color='black'>" + value + "%" + '</font>';
}
var index = 0;

core();
function core()
{		
	window.setInterval
	(
		function()
		{
			if (index<100)
			{
				setValues(index);
				index++;
			}
			
		}, 30
	);
}

function initialize() 
{
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
	center: new google.maps.LatLng(50.123655,18.97851),
	disableDefaultUI: true,
    title: 'autocentrum',
	zoom: 17,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	}
    
    var marker = new google.maps.Marker({
        position: {lat: 50.123655, lng: 18.97851},
        zoom: 15,
        map: map,
        title: 'autocentrum'
    });
    
    var map = new google.maps.Map(mapCanvas, mapOptions);
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);




