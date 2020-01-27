var t;

function stop(){
	clearTimeout(t);
}

function mySlide(i) {
	const slide = document.getElementsByClassName('imgSlide');
	const text = document.getElementsByClassName('sliderButtonsText');
	const title = document.getElementsByClassName('sliderTitle');
	const load = document.getElementsByClassName('loading');

	if (i == 0) {
		text[0].classList.add('sliderActive');
		slide[0].classList.add('imgOpacity');
		title[0].classList.add('titleActive');
		load[0].classList.add('loadingWidth');
		t = setTimeout(function(){
			mySlide(1);
		}, 7000);
	} 

	if (i != 0) {
		text[0].classList.remove('sliderActive');
		slide[0].classList.remove('imgOpacity');
		title[0].classList.remove('titleActive');
		load[0].classList.remove('loadingWidth');
	}

	if (i == 1) {
		text[1].classList.add('sliderActive');
		slide[1].classList.add('imgOpacity');
		title[1].classList.add('titleActive');
		load[1].classList.add('loadingWidth');
		t = setTimeout(function(){
			mySlide(2);
		}, 7000);
	} 

	if (i != 1) {
		text[1].classList.remove('sliderActive');
		slide[1].classList.remove('imgOpacity');
		title[1].classList.remove('titleActive');
		load[1].classList.remove('loadingWidth');
	}

	if (i == 2) {
		text[2].classList.add('sliderActive');
		slide[2].classList.add('imgOpacity');
		title[2].classList.add('titleActive');
		load[2].classList.add('loadingWidth');
		t = setTimeout(function(){
			mySlide(3);
		}, 7000);
	} 

	if (i != 2) {
		text[2].classList.remove('sliderActive');
		slide[2].classList.remove('imgOpacity');
		title[2].classList.remove('titleActive');
		load[2].classList.remove('loadingWidth');
	}

	if (i == 3) {
		text[3].classList.add('sliderActive');
		slide[3].classList.add('imgOpacity');
		title[3].classList.add('titleActive');
		load[3].classList.add('loadingWidth');
		t = setTimeout(function(){
			mySlide(0);
		}, 7000);
	} 

	if (i != 3) {
		text[3].classList.remove('sliderActive');
		slide[3].classList.remove('imgOpacity');
		title[3].classList.remove('titleActive');
		load[3].classList.remove('loadingWidth');
	}	
};