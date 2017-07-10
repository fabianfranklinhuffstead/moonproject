window.onload = moonButton;

function moonButton (){
		var x = document.getElementById('Moon')
		x.onclick = function(){
		if (x.classList.toggle("popupstyle")){
		x.innerHTML = 
		'<h1>How is this done?</h1>'+
		'<p>This program is using HTML, CSS & JS. The calculation of the moon is given with a formulation. This is then emulated to the screen</p>'+
		'<p>We are showing this here in this example</p>'+
		'<h2>The formulation for this is</h2>'+
		'<img src="img/img1.png" height="auto" width="50%">'+
		'<p>This is helpful because it enables you to calculate what measurements the size of the moon is. In summary, this example the view from earth measurements is an adverage.</p>'+
		'<h2>Other useful resources</h2>'+
		'<a href="http://astronomy.swin.edu.au/cosmos/A/Angular+Diameter" target="_blank"><button>Link 1</button></a> <a href="https://en.wikipedia.org/wiki/Angular_diameter" target="_blank"><button>Link 2</button></a>';
		}
		else{
			x.innerHTML = '';
		}
	};
	
};