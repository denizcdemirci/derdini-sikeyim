$(document).ready(function() {
	$('footer .feedback').each(function(i) {
		$(this).append('<span class="derdini-sikeyim"><a onclick="document.getElementById(\'audio' + i + '\').play()" title="basarsan küfür eder">derdini sikeyim</a><audio id="audio' + i + '" src="chrome-extension://' + chrome.runtime.id + '/sound/derdini-sikeyim.mp3" type="audio/mpeg"></audio></span>');
	});
});
