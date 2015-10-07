document.getElementById('highlight').addEventListener('click', sendHighlightMessage, false);

function sendHighlightMessage() {
	chrome.tabs.executeScript(null, { file: "jquery-2.1.4.js" }, function() {
		chrome.tabs.executeScript(null, { file: "jquery.highlight-5.js" }, function() {
			chrome.tabs.executeScript(null, { file: "content_script.js" });
		});
	});
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // chrome.tabs.sendMessage(tabs[0].id, {highlight: true}, function(response) {
      // console.log(response);
    // });
  // });
}
