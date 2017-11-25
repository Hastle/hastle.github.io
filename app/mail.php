<?php

<<<<<<< HEAD
foreach ($_POST as $key => $value) {
	echo '<p><strong>' . $key.':</strong> '.$value.'</p>';
}

=======
>>>>>>> be615abd35390a1fdb7c82afe77de3c48828fafc
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