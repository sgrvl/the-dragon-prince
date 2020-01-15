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