$(document).ready(function(){
$(".toggle_container").hide(); 
$("button").click(function(){
	$(this).toggleClass("active").next().slideToggle("fast");	
	if ($.trim($(this).text()) === 'UnHighlight') {
		$(this).text('Highlight Text!');
	} else {
		$(this).text('UnHighlight');        
	}
	return false; 
});
$("a[href='" + window.location.hash + "']").parent(".reveal").click();
});