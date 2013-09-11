/**
 **  Version 1.0 source
 **  Ability to look through twitter and grab specific chosen shoes
 **  Fix: look up names to get right href link
 **  Fix: Ability to look past 12 loops
 **  TODO: issue with specific twitter feeds specifically ones that do not have 2 links
 **  TODO: add a now is available check instead of launch to ignore
 **/

var shoeName = "Air Penny V"; /** Shoe Name **/
var nikestore = "nikestore"; /** Nike store look up **/
var closeFlag = "no"; /** flag if linked found **/
var tFunction = "twitterScan()"; /** function to call in twitterScan() **/
var tweet = new Array(); /** tweet list **/
var tweetName = new Array(); /** tweetNames **/
var flag = true; /** another flag to get out of loop when ready **/
var shucks = new Array(); /** tweet specified when picked **/
var isAvailable = "now available"; /** special case where now is available **/

/**  
 ** twitterScan that looks at n number of tweets, grabs specific cases and looks for the link to go to. 
 **/
function twitterScan() {
	
	for (var i = 0; i < 12; i++) {
		tweetName[i] = document.getElementsByClassName("fullname js-action-profile-name show-popup-with-id")[i].innerHTML;
		tweet[i] = document.getElementsByClassName("js-tweet-text tweet-text")[i].innerHTML;
		if (tweet[i].match(shoeName) == shoeName) {
			if (tweet[i].match(isAvailable) == isAvailable) {
			  console.log(tweet[i]);
			
			  shucks = document.getElementsByClassName("tweet-text")[i];
			  tests = shucks.getElementsByClassName("twitter-timeline-link");
			  var url = tests[0].href;
			
              window.open(url);
			  //document.getElementsByClassName("twitter-timeline-link")[i].click();
			  //console.log(document.getElementsByClassName("twitter-timeline-link")[i]);
			
			  tFunction = "get outa here";
			  shoeName = " 4444  4 456 7 8 456 7 345 7 345  345 3 1 1 133s "; //buffer to jump out of interval loop
		      flag = false;  // do not reload if found and link is set //
			}
		} 
	}
    
	//if (document.getElementsByClassName("fullname js-action-profile-name show-popup-with-id")[0].innerHTML;
    /**
	if (tweet[0].match(shoeName) == shoeName) {
		document.getElementsByClassName("twitter-timeline-link")[0].click();
		tFunction = "get outa here";
		shoeName = " 4444  4 456 7 8 456 7 345 7 345  345 3 1 1 133s "; //buffer to jump out of interval loop
		
	} 

	else if (tweet[1].match(shoeName) == shoeName) {
		document.getElementsByClassName("twitter-timeline-link")[1].click();
		tFunction = "get outa here";
		shoeName = " 4444  4 456 7 8 456 7 345 7 345  345 3 1 1 133s "; //buffer to jump out of interval loop
		
	}
    **/

    if (flag == false) {
    	
    }
	else {
		location.reload(true);
	}
	setTimeout(tFunction, 200);	
}

setTimeout(tFunction, 200);

//setInterval("refreshPage()", 3000);
//setTimeout("twitterScan()", 100);
//setInterval(tFunction, 700);




