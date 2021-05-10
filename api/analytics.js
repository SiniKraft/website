const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (URLSearchParams.has("a")) {
	console.log("Analytics disabled ;) !");
} else {
	var link = document.createElement('iframe');
	link.setAttribute('src', 'https://2no.co/1SG3a7.png');
	var parent = document.getElementById('div');
	parent.insertAfter(link, parent.firstChild);
}
