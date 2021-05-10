const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (URLSearchParams.has("a")) {
	console.log("Analytics disabled ;) !");
} else {
	var link = document.createElement('iframe');
	link.setAttribute('src', 'https://https://ezstat.ru/1SG3a7');
	var parent = document.getElementById('div');
	parent.insertAfter(link, parent.firstChild);
}
