
// if(window.location.href.indexOf("dummy") == -1){
// var url = window.location.href; 
// var count = url.indexOf('affid=');
// var value = url.substr(count).split('&')[0].split('=')[1];
// var string_url =window.location.toString();
// window.location = string_url.replace(value, 'dummy');
// }

/* chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
	console.log(tablink);
}); */

/*chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var u = tabs[0].url;
	 console.log(u);
    
});*/

//var x = window.location.href;

/*var tabUrl; // global but not visible to the webpage as it's in an "isolated world"

chrome.runtime.sendMessage('get-tabUrl', function(response) {
    tabUrl = response;
    // inject a page script and pass the tabUrl
    document.head.appendChild(document.createElement('script')).text = '(' +
        function(tabUrl) {
            //tabUrl = tabUrl |0; // coerce to numb
            console.log('Injected code got tabURL: ', tabUrl);
        } + ')(' + tabUrl + ')';

}); */

var length = document.getElementsByTagName('a').length;

for(var counter =0; counter<length; counter++){
	if (document.getElementsByTagName('a')[counter].href.match('flipkart')) {
		var x = document.getElementsByTagName('a')[counter].href;
		 var m = x.indexOf('affid=');
		var value= x.substr(m).split('&')[0].split('=')[1];
		var res = x.replace(value, "dummy");
		 document.getElementsByTagName('a')[counter].href= res;
	};

		if (document.getElementsByTagName('a')[counter].href.match('amazon')) {
		var x = document.getElementsByTagName('a')[counter].href;
		 var m = x.indexOf('tag=');
		var value= x.substr(m).split('&')[0].split('=')[1];
		var res = x.replace(value, "dummy");
		 document.getElementsByTagName('a')[counter].href= res;
	};

	

}



var url = window.location.href;
//alert(url);
if ( url.match('tag') && !url.match('dummy') && url.match('amazon')) {

var mm = url.indexOf('tag=');
var value= url.substr(mm).split('&')[0].split('=')[1];
var res = url.replace(value, "dummy");
window.location.href = res;
}




