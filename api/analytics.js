const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has("a") == "true") {
	console.log("Analytics disabled ;) !");
} else {
	var link = document.createElement('iframe');
	link.setAttribute('src', 'https://ezstat.ru/1SG3a7');
	link.setAttribute('width', 0);
	link.setAttribute('height', 0);
	var parent = document.getElementById('div');
	document.body.appendChild(link);
}
