/**
 **  Version 1.0 source
 **  Ability to put in info into cart from nike store
 **  Fix: Use of multiple sizes 
 **  Check for available sizes
 **/
var size_i_want = "9.5";
var sizes = ["9.5", "10", "9"];
var how_many = 1;

function addToCart() {
	console.log("does this function be called");
	var sizesList=document.getElementsByName("skuAndSize")[0];

	function setQuantity() {
		console.log(document.getElementsByName("qty"));
		document.getElementsByName("qty")[0].selectedIndex = how_many-1;
	}
	function setSizeValue() {
		console.log(sizesList);
		checkFlag1: // label for loop
	    for (var j=0; j<sizes.length; j++) {
			checkFlag2:
			console.log("checking for "+sizes[j]);
			for (var i=0; i<sizesList.length; i++){
				if(sizesList.options[i].text == sizes[j]) {
					// lets check if they are available //
					console.log("found size "+sizesList.options[i].text+" now checking for availibility");
					if(sizesList.options[i].className == "exp-pdp-size-not-in-stock") {
						console.log('no size available for '+sizesList.options[i].text);	
					} else {
						console.log('found size and its available');
						document.getElementsByName("skuAndSize")[0].selectedIndex = i;
						setQuantity();
						break checkFlag1;
					}
				}
			}
		}
	}
	if(sizesList != undefined) {
	    setSizeValue();
	    document.getElementsByClassName("add-to-cart")[0].click();
	} else {
	    setTimeout("addToCart()", 250);
	}
}
setTimeout("addToCart()", 250);