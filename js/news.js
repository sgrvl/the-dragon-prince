var t;
var a;
const slide = document.getElementsByClassName('imgSlide');
const text = document.getElementsByClassName('sliderButtonsText');
const title = document.getElementsByClassName('sliderTitle');
const readM = document.getElementsByClassName('aTitle');
const load = document.getElementsByClassName('loading');
const mobile = document.getElementsByClassName('roundButtons');

function stop(){
	clearTimeout(t);
	clearTimeout(a);
	load[0].classList.remove('loadingWidth');
	load[1].classList.remove('loadingWidth');
	load[2].classList.remove('loadingWidth');
	load[3].classList.remove('loadingWidth');
}

function mySlide(i) {	

	if (i == 0) {
		text[0].classList.add('sliderActive');
		slide[0].classList.add('imgOpacity');
		title[0].classList.add('titleActive');
		readM[0].classList.add('aTitleActive');
		load[0].classList.add('loadingWidth');
		mobile[0].classList.add('roundActive');
		t = setTimeout(function(){
			mySlide(1);
		}, 7000);
	} 

	if (i != 0) {
		text[0].classList.remove('sliderActive');
		slide[0].classList.remove('imgOpacity');
		title[0].classList.remove('titleActive');
		readM[0].classList.remove('aTitleActive');
		mobile[0].classList.remove('roundActive');
		a = setTimeout(function(){
			load[1].classList.remove('loadingWidth');
		}, 8000);
	}

	if (i == 1) {
		text[1].classList.add('sliderActive');
		slide[1].classList.add('imgOpacity');
		title[1].classList.add('titleActive');
		readM[1].classList.add('aTitleActive');
		load[1].classList.add('loadingWidth');
		mobile[1].classList.add('roundActive');
		t = setTimeout(function(){
			mySlide(2);
		}, 7000);
	} 

	if (i != 1) {
		text[1].classList.remove('sliderActive');
		slide[1].classList.remove('imgOpacity');
		title[1].classList.remove('titleActive');
		readM[1].classList.remove('aTitleActive');
		mobile[1].classList.remove('roundActive');	
		a = setTimeout(function(){
			load[2].classList.remove('loadingWidth');
		}, 8000);	
	}

	if (i == 2) {
		text[2].classList.add('sliderActive');
		slide[2].classList.add('imgOpacity');
		title[2].classList.add('titleActive');
		readM[2].classList.add('aTitleActive');
		load[2].classList.add('loadingWidth');
		mobile[2].classList.add('roundActive');
		t = setTimeout(function(){
			mySlide(3);
		}, 7000);
	} 

	if (i != 2) {
		text[2].classList.remove('sliderActive');
		slide[2].classList.remove('imgOpacity');
		title[2].classList.remove('titleActive');
		readM[2].classList.remove('aTitleActive');
		mobile[2].classList.remove('roundActive');
		a = setTimeout(function(){
			load[3].classList.remove('loadingWidth');
		}, 8000);
	}

	if (i == 3) {
		text[3].classList.add('sliderActive');
		slide[3].classList.add('imgOpacity');
		title[3].classList.add('titleActive');
		readM[3].classList.add('aTitleActive');
		load[3].classList.add('loadingWidth');
		mobile[3].classList.add('roundActive');
		t = setTimeout(function(){
			mySlide(0);
		}, 7000);
	} 

	if (i != 3) {
		text[3].classList.remove('sliderActive');
		slide[3].classList.remove('imgOpacity');
		title[3].classList.remove('titleActive');
		readM[3].classList.remove('aTitleActive');
		mobile[3].classList.remove('roundActive');
		a = setTimeout(function(){
			load[0].classList.remove('loadingWidth');
		}, 8000);
	}	
};