var dot = document.getElementsByClassName('navDot');
var section = document.getElementsByClassName('section');
let root = document.documentElement;
var charac = document.getElementsByClassName('characImg');
var text = document.getElementsByClassName('text');

var t = 0;
var r;
var p = 0;
var white = [1,3,4,6,8,10,12];

window.addEventListener('wheel', myScroll);

function myScroll(event){
	if (event.deltaY > 0 && t==0) {
		window.scrollBy(0, window.innerHeight); //going down
		t = 1;
		setTimeout(function(){
			t = 0;
		},900);	
		p++;
		if (p > 16) {
			p = 16;
		}
		r = p - 1;		
	}	
	if (event.deltaY < 0 && t==0) {
		window.scrollBy(0, window.innerHeight*-1); //going up
		t = 1;
		setTimeout(function(){
			t = 0;
		},900);
		p--;
		if (p < 0) {
			p = 0;
		}
		r = p + 1;
	}
	
	if(white.includes(p)) {
		root.style.setProperty('--text','white');
	} else {
		root.style.setProperty('--text','#222');
	}

	charac[p].classList.add('characOpacity');
	text[p].classList.add('textOpacity');
	dot[p].classList.add('navDotActive');

	charac[r].classList.remove('characOpacity');
	text[r].classList.remove('textOpacity');
	dot[r].classList.remove('navDotActive');
}

function myClick(u) {
	section[u].scrollIntoView();
	var y = 0;
	for(; y < 17; y++) {
		charac[y].classList.remove('characOpacity');
		text[y].classList.remove('textOpacity');
		dot[y].classList.remove('navDotActive');
	}	

	charac[u].classList.add('characOpacity');
	text[u].classList.add('textOpacity');
	dot[u].classList.add('navDotActive');

	if(white.includes(u)) {
		root.style.setProperty('--text','white');
	} else {
		root.style.setProperty('--text','#222');
	}

	p = u;	
}