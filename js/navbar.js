window.onscroll = function() {scrollFunction()};
window.onload = function() {scrollFunction()};


function scrollFunction(){

	var logo = document.getElementById("logo");

	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		logo.style.width = "72%";
		logo.style.padding = "3%"
	} else {
		logo.style.width = "85%";
		logo.style.padding = "5%"
	}
};

var burger = document.getElementById('burger');
var menu = document.getElementById('mobile-menu');
var wrap = document.getElementById('wrap');
var close = document.getElementById('menuclose');
var firstClick = true;

burger.onclick = function() {		
	wrap.style.transform = 'translate(-70%, -2.5%) scale(0.9)';	
	document.body.style.overflowY = 'hidden';
	menu.style.zIndex = '15';
	if (firstClick == true) {
		firstClick = false;
	} else {
		menu.style.zIndex = '';
		wrap.style.transform = '';		
		document.body.style.overflowY = '';
		firstClick = true;
	}
};

close.onclick = function() {
	menu.style.zIndex = '';
	wrap.style.transform = '';		
	document.body.style.overflowY = '';
	firstClick = true;
};



/*function menu(){
	var wrap = document.getElementById('wrap');
	document.body.style.position = 'fixed'
	wrap.style.transform = 'translate(-70%, -2.5%) scale(0.9)';
	wrap.style.zIndex = '-1';
};*/


/* var news = document.getElementById('news');
	var world = document.getElementById('world');
	var characters = document.getElementById('characters');
	var cast = document.getElementById('cast'); */