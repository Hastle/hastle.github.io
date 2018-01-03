<?php

$secret = "6LebTzoUAAAAAJygZe56iDucOK4SHeoUbh6c1XvZ";
$recepient = "host@eger-web.ga";
$sitename = "eger-web.ga";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$services = trim($_GET["services"]);
$phone = trim($_GET["phone"]);
$text = trim($_GET["text"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nEmail: $email \nТелефон: $phone \nЗаказ: $services \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>