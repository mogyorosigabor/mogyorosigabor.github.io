window.onscroll = function() {
	myFunction();
	CloseNav();
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

function OpenNav() {
   	document.getElementById("MySideNav").style.width = "250px";
	document.getElementById("OpenNavButton").style.zIndex = "0";
	document.getElementById("myNavOverlay").style.display = "block";
}

function CloseNav() {
   	document.getElementById("MySideNav").style.width = "0";
	document.getElementById("OpenNavButton").style.zIndex = "3";
	document.getElementById("myNavOverlay").style.display = "none";
}