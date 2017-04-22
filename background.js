 var selectedId = -1; var x;
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  if (tab.url.indexOf("http") > -1 && 
    changeInfo.url === undefined){
    chrome.tabs.executeScript(tabId, {file: "inject.js"} );
  }
  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
	window.x = tab.url;  
});
});	

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg === 'get-tabUrl') {
        sendResponse(sender.tab.id);
		return true;
    }
});

 

/*chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
     var u = tab.url;
	 alert(u);
   }
);*/


// chrome.tabs.onSelectionChanged.addListener(function (tabId, props) {
//     selectedId = tabId;
//     scrappy();
// });

// function scrappy() {
//     chrome.windows.getCurrent(function (currentWindow) {
//         chrome.tabs.query({active: true, windowId: currentWindow.id},
//             function (activeTabs) {
//                 chrome.tabs.executeScript(
//                     activeTabs[0].id, {file: 'inject.js', allFrames: true});
//                 //all injected
//             });

//     });
// }