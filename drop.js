$(document).ready(function(){
$(".toggle_container").hide(); 
$("#highlightS").click(function(){
	$(this).toggleClass("active").next().next().slideToggle("fast");
	if ($.trim($(this).next().text()) === 'UnHighlight') {
		$(this).toggleClass("active").next().next().next().slideToggle("fast");	
		$(this).next().text('Highlight emotive words!');
	}
	if ($.trim($(this).text()) === 'UnHighlight') {
		$(this).text('Highlight sensational words!');
	} else {
		$(this).text('UnHighlight');        
	}
	return false; 
});
$("#highlightE").click(function(){
	$(this).toggleClass("active").next().next().slideToggle("fast");
	if ($.trim($(this).prev().text()) === 'UnHighlight') {
		$(this).toggleClass("active").next().slideToggle("fast");	
		$(this).prev().text('Highlight sensational words!');
	}	
	if ($.trim($(this).text()) === 'UnHighlight') {
		$(this).text('Highlight emotive words!');
	} else {
		$(this).text('UnHighlight');        
	}
	return false; 
});
$("a[href='" + window.location.hash + "']").parent(".reveal").click();
});