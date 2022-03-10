function open_link(repo) {
  api_url = 'https://api.github.com/repos/SiniKraft/' + repo + '/releases/latest';
  var final_link = 'javascript:void(0)';
  $.getJSON(api_url, function(json) {
  	var assets = json.assets;
    for (let key in assets) {
    	if (assets[key].browser_download_url.includes('.exe') || assets[key].browser_download_url.includes('.msi')) {
    		final_link = assets[key].browser_download_url;
    	}
    }
    window.open(final_link, "_self");
  });
}
