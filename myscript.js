chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.highlight === true) {
    highlightText(document.body);
    sendResponse({messageStatus: "received"});
  }
});

function highlightText(element) {
	element.highlight('the');
}