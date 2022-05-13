<?php
//vars
$subject = "Contacto desde el Sitio Web";
$to = 'jmiguens@foconetworks.com';

$from = $_POST['email'];

//data
$msg = "NOMBRE: "  .$_POST['nombre']    ."<br>\n";
$msg .= "EMAIL: "  .$_POST['email']    ."<br>\n";
$msg .= "EMPRESA: "  .$_POST['empresa']    ."<br>\n";
$msg .= "TELEFONO: "  .$_POST['telefono']    ."<br>\n";
$msg .= "CONSULTA: "  .$_POST['comments']    ."<br>\n";

//Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <".$from.">" ;


//send for each mail
mail($to, $subject, $msg, $headers);


?>
