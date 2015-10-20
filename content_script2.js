// document.body.style.backgroundColor="red"

// jQuery.fn.highlight=function(c){function e(b,c){var d=0;if(3==b.nodeType){var a=b.data.toUpperCase().indexOf(c),a=a-(b.data.substr(0,a).toUpperCase().length-b.data.substr(0,a).length);if(0<=a){d=document.createElement("span");d.className="highlight";a=b.splitText(a);a.splitText(c.length);var f=a.cloneNode(!0);d.appendChild(f);a.parentNode.replaceChild(d,a);d=1}}else if(1==b.nodeType&&b.childNodes&&!/(script|style)/i.test(b.tagName))for(a=0;a<b.childNodes.length;++a)a+=e(b.childNodes[a],c);return d} return this.length&&c&&c.length?this.each(function(){e(this,c.toUpperCase())}):this};jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()};

//if ($(".yay").length > 0) { $("p").removeHighlight(); }
if ($(".emoHighlight1").length > 0 || 
	$(".emoHighlight2").length > 0 || 
	$(".emoHighlight3").length > 0 || 
	$(".emoHighlight4").length > 0 || 
	$(".emoHighlight5").length > 0 ||  
	$(".emoHighlight6").length > 0 ||  
	$(".emoHighlight7").length > 0 ||  
	$(".emoHighlight8").length > 0 ||  
	$(".emoHighlight9").length > 0 ||  
	$(".emoHighlight10").length > 0 ||  
	$(".emoHighlight11").length > 0 ||  
	$(".emoHighlight12").length > 0 ||  
	$(".emoHighlight13").length > 0) { 
	$("p").removeHighlight('emoHighlight1'); 
	$("p").removeHighlight('emoHighlight2');
	$("p").removeHighlight('emoHighlight3');
	$("p").removeHighlight('emoHighlight4');
	$("p").removeHighlight('emoHighlight5');
	$("p").removeHighlight('emoHighlight6');
	$("p").removeHighlight('emoHighlight7');
	$("p").removeHighlight('emoHighlight8');
	$("p").removeHighlight('emoHighlight9');
	$("p").removeHighlight('emoHighlight10');
	$("p").removeHighlight('emoHighlight11');
	$("p").removeHighlight('emoHighlight12');
	$("p").removeHighlight('emoHighlight13');
	
	$("p").highlight(' scorned ', 'sensaHighlight1');
	$("p").highlight(' killing ', 'sensaHighlight2');
	$("p").highlight(' beloved ', 'sensaHighlight3');
	$("p").highlight(' regret ', 'sensaHighlight4');
	$("p").highlight(' death ', 'sensaHighlight5');
	$("p").highlight(' infamy ', 'sensaHighlight6');
	$("p").highlight(' lured ', 'sensaHighlight7');
	$("p").highlight(' decapitated ', 'sensaHighlight8');
	$("p").highlight(' outrage ', 'sensaHighlight9');
	$("p").highlight(' killed ', 'sensaHighlight10');
	$("p").highlight(' only ', 'sensaHighlight11');
	$("p").highlight(' awesome ', 'sensaHighlight12');
	$("p").highlight(' Best ', 'sensaHighlight13');
	$("p").highlight(' Biggest ', 'sensaHighlight14');
	$("p").highlight(' loving ', 'sensaHighlight15');
	$("p").highlight(' successfully ', 'sensaHighlight16');
	$("p").highlight(' happy ', 'sensaHighlight17');
	$("p").highlight(' life ', 'sensaHighlight18');
	$("p").highlight(' threatening ', 'sensaHighlight19');
	$("p").highlight(' suffering ', 'sensaHighlight20');
	$("p").highlight(' injury ', 'sensaHighlight21');
	$("p").highlight(' grateful ', 'sensaHighlight22');
	$(".sensaHighlight1").css({ backgroundColor: "#B992DF" });
	$(".sensaHighlight2").css({ backgroundColor: "#BEA1DB" });
	$(".sensaHighlight3").css({ backgroundColor: "#B992DF" });
	$(".sensaHighlight4").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight5").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight6").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight7").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight8").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight9").css({ backgroundColor: "#BEA1DB" });
	$(".sensaHighlight10").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight11").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight12").css({ backgroundColor: "#B992DF" });
	$(".sensaHighlight13").css({ backgroundColor: "#BEA1DB" });
	$(".sensaHighlight14").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight15").css({ backgroundColor: "#B992DF" });
	$(".sensaHighlight16").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight17").css({ backgroundColor: "#BEA1DB" });
	$(".sensaHighlight18").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight19").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight20").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight21").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight22").css({ backgroundColor: "#D0C9DB" });
	}
else if ($(".sensaHighlight1").length > 0 ||
		 $(".sensaHighlight2").length > 0 ||
		 $(".sensaHighlight3").length > 0 ||
		 $(".sensaHighlight4").length > 0 ||
		 $(".sensaHighlight5").length > 0 ||
		 $(".sensaHighlight6").length > 0 ||
		 $(".sensaHighlight7").length > 0 ||
		 $(".sensaHighlight8").length > 0 ||
		 $(".sensaHighlight9").length > 0 ||
		 $(".sensaHighlight10").length > 0 ||
		 $(".sensaHighlight11").length > 0 ||
		 $(".sensaHighlight12").length > 0 ||
		 $(".sensaHighlight13").length > 0 ||
		 $(".sensaHighlight14").length > 0 ||
		 $(".sensaHighlight15").length > 0 ||
		 $(".sensaHighlight16").length > 0 ||
		 $(".sensaHighlight17").length > 0 ||
		 $(".sensaHighlight18").length > 0 ||
		 $(".sensaHighlight19").length > 0 ||
		 $(".sensaHighlight20").length > 0 ||
		 $(".sensaHighlight21").length > 0 ||
		 $(".sensaHighlight22").length > 0) {
			$("p").removeHighlight('sensaHighlight1');
			$("p").removeHighlight('sensaHighlight2');
			$("p").removeHighlight('sensaHighlight3');
			$("p").removeHighlight('sensaHighlight4');
			$("p").removeHighlight('sensaHighlight5');
			$("p").removeHighlight('sensaHighlight6');
			$("p").removeHighlight('sensaHighlight7');
			$("p").removeHighlight('sensaHighlight8');
			$("p").removeHighlight('sensaHighlight9');
			$("p").removeHighlight('sensaHighlight10');
			$("p").removeHighlight('sensaHighlight11');
			$("p").removeHighlight('sensaHighlight12');
			$("p").removeHighlight('sensaHighlight13');
			$("p").removeHighlight('sensaHighlight14');
			$("p").removeHighlight('sensaHighlight15');
			$("p").removeHighlight('sensaHighlight16');
			$("p").removeHighlight('sensaHighlight17');
			$("p").removeHighlight('sensaHighlight18');
			$("p").removeHighlight('sensaHighlight19');
			$("p").removeHighlight('sensaHighlight20');
			$("p").removeHighlight('sensaHighlight21');
			$("p").removeHighlight('sensaHighlight22');
		 }
else {
	$("p").highlight(' scorned ', 'sensaHighlight1');
	$("p").highlight(' killing ', 'sensaHighlight2');
	$("p").highlight(' beloved ', 'sensaHighlight3');
	$("p").highlight(' regret ', 'sensaHighlight4');
	$("p").highlight(' death ', 'sensaHighlight5');
	$("p").highlight(' infamy ', 'sensaHighlight6');
	$("p").highlight(' lured ', 'sensaHighlight7');
	$("p").highlight(' decapitated ', 'sensaHighlight8');
	$("p").highlight(' outrage ', 'sensaHighlight9');
	$("p").highlight(' killed ', 'sensaHighlight10');
	$("p").highlight(' only ', 'sensaHighlight11');
	$("p").highlight(' awesome ', 'sensaHighlight12');
	$("p").highlight(' Best ', 'sensaHighlight13');
	$("p").highlight(' Biggest ', 'sensaHighlight14');
	$("p").highlight(' loving ', 'sensaHighlight15');
	$("p").highlight(' successfully ', 'sensaHighlight16');
	$("p").highlight(' happy ', 'sensaHighlight17');
	$("p").highlight(' life ', 'sensaHighlight18');
	$("p").highlight(' threatening ', 'sensaHighlight19');
	$("p").highlight(' suffering ', 'sensaHighlight20');
	$("p").highlight(' injury ', 'sensaHighlight21');
	$("p").highlight(' grateful ', 'sensaHighlight22');
	$(".sensaHighlight1").css({ backgroundColor: "#B992DF" });
	$(".sensaHighlight2").css({ backgroundColor: "#BEA1DB" });
	$(".sensaHighlight3").css({ backgroundColor: "#B992DF" });
	$(".sensaHighlight4").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight5").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight6").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight7").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight8").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight9").css({ backgroundColor: "#BEA1DB" });
	$(".sensaHighlight10").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight11").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight12").css({ backgroundColor: "#B992DF" });
	$(".sensaHighlight13").css({ backgroundColor: "#BEA1DB" });
	$(".sensaHighlight14").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight15").css({ backgroundColor: "#B992DF" });
	$(".sensaHighlight16").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight17").css({ backgroundColor: "#BEA1DB" });
	$(".sensaHighlight18").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight19").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight20").css({ backgroundColor: "#C7B6DA" });
	$(".sensaHighlight21").css({ backgroundColor: "#D0C9DB" });
	$(".sensaHighlight22").css({ backgroundColor: "#D0C9DB" });
}

// $('#span').removeHighlight();	
	
// Will highlight each keyword "the" in the context ".test"
// It will ignore all keywords inside ".noHighlight" and ".ignore".
// The wrapper element will be a "em"-element with the class "customHighlight"
// $("div").jmHighlight("the", {
     // // Optional
    // "filter": [],
    // // Optional. Default is "span"
    // "element": "em",
    // // Optional. Default is "highlight"
    // "className": "customHighlight",
    // // Optional: If your search keyword is more than one word
    // // separeted with a blank, you can define this property with true
    // // if you want a separeted search for the keywords. If you define
    // // nothing the default value is false, so it will be searched
    // // for the complete term
    // "separateWordSearch": true,
    // // if diacritics should be matched too
    // "diacritics": true, // default true
    // // set "debug" to true if you want to see console logs
    // "debug": true
// });

// $("p").jmHighlight("the", {
     // // Optional
    // "filter": [],
    // // Optional. Default is "span"
    // "element": "em",
    // // Optional. Default is "highlight"
    // "className": "bCustomHighlight",
    // // Optional: If your search keyword is more than one word
    // // separeted with a blank, you can define this property with true
    // // if you want a separeted search for the keywords. If you define
    // // nothing the default value is false, so it will be searched
    // // for the complete term
    // "separateWordSearch": true,
    // // if diacritics should be matched too
    // "diacritics": true, // default true
    // // set "debug" to true if you want to see console logs
    // "debug": true
// });

// $(".customHighlight").css({ backgroundColor: "#FF0000" });
// $(".bCustomHighlight").css({ backgroundColor: "#FF0000" });
// $(".gc-container").css({ backgroundColor: "#0000FF" });
