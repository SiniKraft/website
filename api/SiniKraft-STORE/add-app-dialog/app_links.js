function open_link(repo, id) {
  api_url = 'https://api.github.com/repos/SiniKraft/' + repo + '/releases/latest';
  var final_link = 'javascript:void(0)';
  $.getJSON(api_url, function(json) {
  	var assets = json.assets;
    for (let key in assets) {
    	if (assets[key].browser_download_url.includes('.exe') || assets[key].browser_download_url.includes('.msi')) {
    		final_link = assets[key].browser_download_url;
    	}
    }
    document.getElementById(id).href = final_link;
  });
}

open_link('NoMoskito!', 'NoMoskito!');
open_link('Gob-Fish', 'Gob Fish');
open_link('SiniKraft-Store', 'SiniKraft STORE');
open_link('Discord-Spammer', 'Discord Spammer');
open_link('YoutubeDownloader', 'Youtube Downloader by Nicklor');