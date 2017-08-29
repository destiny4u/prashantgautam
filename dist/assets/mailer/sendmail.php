<?php
echo "<pre>";
require 'PHPMailerAutoload.php';
$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 587; // or 587
$mail->IsHTML(true);
$mail->Username = "prashant.gautam@volansystech.com";
$mail->Password = "Akshay@@143";
$mail->SetFrom("prashant.gautam@volansystech.com");
$mail->Subject = "Test";
$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
$mail->AddAddress("prashant.gautam@volansystech.com");

 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo "Message has been sent";
 }
?>
