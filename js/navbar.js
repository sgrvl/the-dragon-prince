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


/* var news = document.getElementById('news');
	var world = document.getElementById('world');
	var characters = document.getElementById('characters');
	var cast = document.getElementById('cast'); */