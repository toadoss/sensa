document.getElementById('highlightE').addEventListener('click', sendEmoHighlightMessage, false);
document.getElementById('highlightS').addEventListener('click', sendSensaHighlightMessage, false);

function sendEmoHighlightMessage(){
	chrome.tabs.executeScript(null, { file: "jquery-2.1.4.js" }, function() {
		chrome.tabs.executeScript(null, { file: "jquery.highlight-5.js" }, function() {
			chrome.tabs.executeScript(null, { file: "content_script.js" });
		});
	});
}

function sendSensaHighlightMessage(){
	chrome.tabs.executeScript(null, { file: "jquery-2.1.4.js" }, function() {
		chrome.tabs.executeScript(null, { file: "jquery.highlight-5.js" }, function() {
			chrome.tabs.executeScript(null, { file: "content_script2.js" });
		});
	});
}