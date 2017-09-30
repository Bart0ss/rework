
var map;     

function  url()
{
	window.location.href = "index.html";
}
/*
function setValues(value)
{
	document.getElementById("counter").innerHTML = "<font color='black'>" + value + "%" + '</font>';
	document.getElementById("counter1").innerHTML = "<font color='black'>" + value + '</font>';
	document.getElementById("counter2").innerHTML = "<font color='black'>" + value + "%" + '</font>';
	document.getElementById("counter3").innerHTML = "<font color='black'>" + value + "%" + '</font>';
}
var index = 55;

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
*/



var isShown;

if($( window ).width() >= 769)
{
	isShown=false;
}
else
{
	isShown=true;
}

function parse()
{
	if (!isShown)
	{
		var cusid_ele = document.getElementsByClassName('menuitems');
		for (var i = 0; i < cusid_ele.length; ++i) 
		{
			var item = cusid_ele[i];  
			item.style.display = "inherit";
		}
		isShown=true;
	}
	else
	{
		var cusid_ele = document.getElementsByClassName('menuitems');
		for (var i = 0; i < cusid_ele.length; ++i) 
		{
			var item = cusid_ele[i];  
			item.style.display = "none";
		}
		isShown=false;
	}
}





