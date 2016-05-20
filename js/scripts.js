$( document ).ready(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        console.log("after preventing default");

        // Serialize the form data.
        var name = $("#InputName").val();
        var email = $("#InputEmail").val();
        var message = $("#comment").val();
        console.log("name=" + name + "&email=" + email + "&message=" + message);
        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: "php/index.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success : function(text){
            if (text.trim() == "exito"){
                formSuccess();
            } 
            else {
                formFail(text);
            }
        }
        })
    });

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

    //set opacity to siblings
    /*
    $('.card').hover(function(){
        console.log("im here");
        $(this).siblings('.card').css('transform','scale(0.9)');}
        , function (){
        $(this).siblings('.card').css('transform','scale(1)');
    });
*/
});

function formSuccess(){
    $("#InputName").val("");
    $("#InputEmail").val("");
    $("#comment").val("");

    var myAlert = '<div class="alert alert-success">' +
        '<strong>Gracias!</strong> Tu mensaje ha sido enviado correctamente, pronto estaremos en contacto contigo.' +
        '</div>';

    $(myAlert).hide().appendTo('#form-messages').fadeIn(1000);
}

function formFail(text){
    var formMessages = $('#form-messages');
    formMessages.append('<div class="alert alert-warning">' +
    '<strong>Warning! ' + text + '</strong>Ha ocurrido un error con el envio, por favor comunicate con nosotros a nuestro telefono de contacto.' +
    '</div>');
}