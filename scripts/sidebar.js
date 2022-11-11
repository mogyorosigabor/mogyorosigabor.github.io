window.onscroll = function() {CloseNav();}

function OpenNav() {
   	document.getElementById("MySideNav").style.width = "250px";
	document.getElementById("OpenNavButton")[0].style.zIndex = "0";
	document.getElementById("myNavOverlay").style.display = "block";
}

function CloseNav() {
   	document.getElementById("MySideNav").style.width = "0";
	document.getElementById("OpenNavButton")[0].style.zIndex = "1";
	document.getElementById("myNavOverlay").style.display = "none";
}