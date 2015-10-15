// document.body.style.backgroundColor="red"

// jQuery.fn.highlight=function(c){function e(b,c){var d=0;if(3==b.nodeType){var a=b.data.toUpperCase().indexOf(c),a=a-(b.data.substr(0,a).toUpperCase().length-b.data.substr(0,a).length);if(0<=a){d=document.createElement("span");d.className="highlight";a=b.splitText(a);a.splitText(c.length);var f=a.cloneNode(!0);d.appendChild(f);a.parentNode.replaceChild(d,a);d=1}}else if(1==b.nodeType&&b.childNodes&&!/(script|style)/i.test(b.tagName))for(a=0;a<b.childNodes.length;++a)a+=e(b.childNodes[a],c);return d} return this.length&&c&&c.length?this.each(function(){e(this,c.toUpperCase())}):this};jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()};

//if ($(".yay").length > 0) { $("p").removeHighlight(); }
if ($(".sensaHighlight1").length > 0 || 
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
	$(".sensaHighlight13").length > 0) { 
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
	}
else {

	$("p").highlight(' outrage ', 'sensaHighlight1');
	$("p").highlight(' death ', 'sensaHighlight2');
	$("p").highlight(' regret ', 'sensaHighlight3');
	$("p").highlight(' beloved ', 'sensaHighlight4');
	$("p").highlight(' killing ', 'sensaHighlight5');
	$("p").highlight(' scorned ', 'sensaHighlight6');
	$("p").highlight(' Best ', 'sensaHighlight7');
	$("p").highlight(' loving ', 'sensaHighlight8');
	$("p").highlight(' successfully ', 'sensaHighlight9');
	$("p").highlight(' happy ', 'sensaHighlight10');
	$("p").highlight(' threatening ', 'sensaHighlight11');
	$("p").highlight(' grateful ', 'sensaHighlight12');
	$("p").highlight(' awesome ', 'sensaHighlight13');
	$(".sensaHighlight1").css({ backgroundColor: "#Dab4b4" });
	$(".sensaHighlight2").css({ backgroundColor: "#Dab4b4" });
	$(".sensaHighlight3").css({ backgroundColor: "#F6DCDC" });
	$(".sensaHighlight4").css({ backgroundColor: "#91A9DF" });
	$(".sensaHighlight5").css({ backgroundColor: "#DF9191" });
	$(".sensaHighlight6").css({ backgroundColor: "#DF9191" });
	$(".sensaHighlight7").css({ backgroundColor: "#91A9DF" });
	$(".sensaHighlight8").css({ backgroundColor: "#91A9DF" });
	$(".sensaHighlight9").css({ backgroundColor: "#DBE1F6" });
	$(".sensaHighlight10").css({ backgroundColor: "#B4BFDA" });
	$(".sensaHighlight11").css({ backgroundColor: "#Dab4b4" });
	$(".sensaHighlight12").css({ backgroundColor: "#B4C1DA" });
	$(".sensaHighlight13").css({ backgroundColor: "#91A9DF" });
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
