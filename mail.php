<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  // Файлы phpmailer
  require 'phpmailer/PHPMailer.php';
  require 'phpmailer/Exception.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTMLl(true);

  $mail->setFrom('info@yandex.ru', 'Неизвестный юзер');
  $mail->addAddress('alhimist90@yandex.ru');
  $mail->Subject = 'Тестовое письмо';

  $hand = "Правая";
  if($_POST['hand'] == "left") {
    $hand = "Левая"
  }

  $body = '<h1>Письмо</h1>';

  if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }

  if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-Mail:</strong> '.$_POST['email'].'</p>';
  }

  if(trim(!empty($_POST['hand']))) {
    $body.='<p><strong>E-Mail:</strong> '.$hand.'</p>';
  }

  if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>
