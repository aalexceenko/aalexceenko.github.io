var link = document.querySelector(".connection-form");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us-close");
var login = document.querySelector("[name=name]");
var form = document.querySelector("form.feedback");
var mail = document.querySelector("[name=mail]");
var sms = document.querySelector("[name=discrabe]");
if (link != null) {
		link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("write-us-show");
		login.focus();
	});
}
if (close != null) {
	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("write-us-show");		
	});
}
var link2 = document.querySelectorAll(".buy");
var popup2 = document.querySelector(".basket");
var close2 = document.querySelector(".basket-close");
if (link2 != null) {
	for (var i=0; i<link2.length;i++) {
		link2[i].addEventListener("click", function(event) {
			event.preventDefault();
			popup2.classList.add("basket-show");
		});
	};
}
if (close2 != null) {		
	close2.addEventListener("click", function(event) {
		event.preventDefault();
		popup2.classList.remove("basket-show");
	});
}
var map = document.querySelector(".map-open");
var popupmap = document.querySelector(".map");
var closemap = popupmap.querySelector(".map-close");
if (map != null) {
	map.addEventListener("click", function(event) {
		event.preventDefault();
		popupmap.classList.add("map-show");
	});
}
if (closemap != null) {
	closemap.addEventListener("click", function(event) {
		event.preventDefault();
		popupmap.classList.remove("map-show");		
	});
}