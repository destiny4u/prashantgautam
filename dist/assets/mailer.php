<?php
echo "<pre>";
header('Access-Control-Allow-Origin: *');  

header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_encode($postdata);
	$drequest = json_decode($postdata);

	$from_email = $drequest->email;
	$message = $drequest->message;
	$from_name = $drequest->name;
	$to_email = $from_email;

require 'mailer/PHPMailerAutoload.php';
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
//$mail->msgHTML(file_get_contents('./mailer/contents.html'), dirname(__FILE__));
//$mail->msgHTML(json_decode($_POST));
$mail->Body = $message;
$mail->AddAddress($to_email);

 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo "Message has been sent";
 }
 
	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>