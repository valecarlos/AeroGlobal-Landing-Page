<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: noreply@carlosvalencia.co'; 
    $to = 'carlos_valencia@live.com'; 
    $subject = 'Contacto Aeroglobal';
    //$human = $_POST['human'];
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
	
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";
    $headers = 'From: noreply@carlosvalencia.co' . "\r\n" .
    'Reply-To: noreply@carlosvalencia.co' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $success = mail($to, $subject, $body, $headers);

    if ($success){
        echo "exito";
    }else{
        echo "invalid";
    }
?>	