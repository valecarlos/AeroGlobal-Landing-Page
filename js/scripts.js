$( document ).ready(function() {

    $("#hideMenu").click(function(){
    	$('#menu').toggle("slide");
    	return false;
    });
	//great code snippet to smoothly scroll to Tags using Anchors and their href. while updating the URL so the user can go back
//http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
    var $root = $('html, body');
    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
});