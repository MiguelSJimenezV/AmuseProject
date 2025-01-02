<?php
// Este codigo es para ver los errores en el servidor, por si los hubiese
error_reporting(-1);
ini_set('display_error', 'On');
set_error_handler("var_dump");

$subject = $_POST['subject'];
$msg = 'El usuario ' . $_POST['name'] . 'quiere comunicar lo siguiente ' . $_POST['message'];
$from = $_POST['email'];
$to = "miguel.jimenez@davinci.edu.ar";

$headers = "From: test@test.com\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

if (mail($to, $subject, $msg, $headers)) {
    header('Location:gracias.html');
} else {
    $error = error_get_last()['msg'];
    echo $error;
}
