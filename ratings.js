function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];

    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
  
getCurrentTabUrl(function(url) {
	if (url == 'http://www.huffingtonpost.com.au/entry/dentist-who-killed-cecil-the-lion-apologizes-in-note-to-patients_55b90e2be4b0074ba5a72148?section=australia&adsSiteOverride=au') {
		var emotiveCircle = document.querySelector(".emotive");
		emotiveCircle.style.backgroundColor = "#C7B6DA";
	}
	else if (url == 'http://www.faithit.com/kicked-off-plane-back-to-the-gate/') {
		var emotiveCircle = document.querySelector(".emotive");
		emotiveCircle.style.backgroundColor = "#B4BFDA";
	}
	else if (url == 'http://www.mamamia.com.au/news/sportsmen-and-violence-against-women/') {
		var emotiveCircle = document.querySelector(".emotive");
		emotiveCircle.style.backgroundColor = "#F70C0C";
	}
});