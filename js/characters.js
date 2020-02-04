var t = 0;
//Adding delay between scrolls -> 0.9s
window.addEventListener('wheel', function myScroll(){
	if (event.deltaY > 0 && t==0) {
		window.scrollBy(0, window.innerHeight);
		t = 1;
		setTimeout(function(){
			t = 0;
		},900);		
	}	
	else if (event.deltaY < 0 && t==0) {
		window.scrollBy(0, window.innerHeight*-1);
		t = 1;
		setTimeout(function(){
			t = 0;
		},900);			
	}
});


var dot = document.getElementsByClassName('navDot');
var section = document.getElementsByClassName('section');
let root = document.documentElement;
var charac = document.getElementsByClassName('characImg');
var text = document.getElementsByClassName('text');

var observer0 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[0].classList.add('navDotActive');
		root.style.setProperty('--text','#222');
		charac[0].classList.add('characOpacity');
		text[0].classList.add('textOpacity');
	} else {
		dot[0].classList.remove('navDotActive');
		charac[0].classList.remove('characOpacity');
		text[0].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer0.observe(section[0]);

var observer1 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[1].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[1].classList.add('characOpacity');
		text[1].classList.add('textOpacity');
	} else {
		dot[1].classList.remove('navDotActive');
		charac[1].classList.remove('characOpacity');
		text[1].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer1.observe(section[1]);

var observer2 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[2].classList.add('navDotActive');
		root.style.setProperty('--text','#222');
		charac[2].classList.add('characOpacity');
		text[2].classList.add('textOpacity');
	} else {
		dot[2].classList.remove('navDotActive');
		charac[2].classList.remove('characOpacity');
		text[2].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer2.observe(section[2]);

var observer3 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[3].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[3].classList.add('characOpacity');
		text[3].classList.add('textOpacity');
	} else {
		dot[3].classList.remove('navDotActive');
		charac[3].classList.remove('characOpacity');
		text[3].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer3.observe(section[3]);

var observer4 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[4].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[4].classList.add('characOpacity');
		text[4].classList.add('textOpacity');
	} else {
		dot[4].classList.remove('navDotActive');
		charac[4].classList.remove('characOpacity');
		text[4].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer4.observe(section[4]);

var observer5 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[5].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[5].classList.add('characOpacity');
		text[5].classList.add('textOpacity');
	} else {
		dot[5].classList.remove('navDotActive');
		charac[5].classList.remove('characOpacity');
		text[5].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer5.observe(section[5]);

var observer6 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[6].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[6].classList.add('characOpacity');
		text[6].classList.add('textOpacity');
	} else {
		dot[6].classList.remove('navDotActive');
		charac[6].classList.remove('characOpacity');
		text[6].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer6.observe(section[6]);

var observer7 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[7].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[7].classList.add('characOpacity');
		text[7].classList.add('textOpacity');
	} else {
		dot[7].classList.remove('navDotActive');
		charac[7].classList.remove('characOpacity');
		text[7].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer7.observe(section[7]);

var observer8 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[8].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[8].classList.add('characOpacity');
		text[8].classList.add('textOpacity');
	} else {
		dot[8].classList.remove('navDotActive');
		charac[8].classList.remove('characOpacity');
		text[8].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer8.observe(section[8]);

var observer9 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[9].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[9].classList.add('characOpacity');
		text[9].classList.add('textOpacity');
	} else {
		dot[9].classList.remove('navDotActive');
		charac[9].classList.remove('characOpacity');
		text[9].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer9.observe(section[9]);

var observer10 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[10].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[10].classList.add('characOpacity');
		text[10].classList.add('textOpacity');
	} else {
		dot[10].classList.remove('navDotActive');
		charac[10].classList.remove('characOpacity');
		text[10].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer10.observe(section[10]);

var observer11 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[11].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[11].classList.add('characOpacity');
		text[11].classList.add('textOpacity');
	} else {
		dot[11].classList.remove('navDotActive');
		charac[11].classList.remove('characOpacity');
		text[11].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer11.observe(section[11]);

var observer12 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[12].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[12].classList.add('characOpacity');
		text[13].classList.add('textOpacity');
	} else {
		dot[12].classList.remove('navDotActive');
		charac[12].classList.remove('characOpacity');
		text[12].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer12.observe(section[12]);

var observer13 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[13].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[13].classList.add('characOpacity');
		text[13].classList.add('textOpacity');
	} else {
		dot[13].classList.remove('navDotActive');
		charac[13].classList.remove('characOpacity');
		text[13].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer13.observe(section[13]);

var observer14 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[14].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[14].classList.add('characOpacity');
		text[14].classList.add('textOpacity');
	} else {
		dot[14].classList.remove('navDotActive');
		charac[14].classList.remove('characOpacity');
		text[14].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer14.observe(section[14]);

var observer15 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[15].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[15].classList.add('characOpacity');
		text[15].classList.add('textOpacity');
	} else {
		dot[15].classList.remove('navDotActive');
		charac[15].classList.remove('characOpacity');
		text[15].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer15.observe(section[15]);

var observer16 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
		dot[16].classList.add('navDotActive');
		root.style.setProperty('--text','white');
		charac[16].classList.add('characOpacity');
		text[16].classList.add('textOpacity');
	} else {
		dot[16].classList.remove('navDotActive');
		charac[16].classList.remove('characOpacity');
		text[16].classList.remove('textOpacity');
	}
}, { threshold: [0.5] });
observer16.observe(section[16]);