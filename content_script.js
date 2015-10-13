// document.body.style.backgroundColor="red"

// jQuery.fn.highlight=function(c){function e(b,c){var d=0;if(3==b.nodeType){var a=b.data.toUpperCase().indexOf(c),a=a-(b.data.substr(0,a).toUpperCase().length-b.data.substr(0,a).length);if(0<=a){d=document.createElement("span");d.className="highlight";a=b.splitText(a);a.splitText(c.length);var f=a.cloneNode(!0);d.appendChild(f);a.parentNode.replaceChild(d,a);d=1}}else if(1==b.nodeType&&b.childNodes&&!/(script|style)/i.test(b.tagName))for(a=0;a<b.childNodes.length;++a)a+=e(b.childNodes[a],c);return d} return this.length&&c&&c.length?this.each(function(){e(this,c.toUpperCase())}):this};jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()};
$("p").highlight('the', 'yay');
$("p").highlight('and', 'gah');
$(".yay").css({ backgroundColor: "#9999FF" });
$(".gah").css({ backgroundColor: "#FF9999" });


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
