$(document).ready(function() {
	$('footer .feedback').each(function(index) {
		$(this).append('<span class="derdini-sikeyim"><a onclick="document.getElementById(\'audio' + index + '\').play()">derdini sikeyim</a><audio id="audio' + index + '" src="chrome-extension://' + chrome.runtime.id + '/derdini-sikeyim.mp3" type="audio/mpeg"></audio></span>');
	});
});
