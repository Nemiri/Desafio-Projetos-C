<?php
$errorMSG = "";

if (empty($_POST["name"])) {
    $errorMSG = "Preencha todos os campos, por favor!";
} else {
    $name = $_POST["name"];
}

if (empty($_POST["email"])) {
    $errorMSG = "Preencha todos os campos, por favorl!";
} else {
    $email = $_POST["email"];
}

if (empty($_POST["message"])) {
    $errorMSG = "Preencha todos os campos, por favor!";
} else {
    $message = $_POST["message"];
}

if ($_POST["subject"] == 0) {
    $errorMSG = "Preencha todos os campos ou selecione algum assunto, por favor!";
} else {
    if($_POST["subject"] == 1) {
        $subject = "Tópico 1";
    } else if($_POST["subject"] == 2){
        $subject = "Tópico 2";
    } else {
        $subject = "Tópico 3";
    }
}

$emailto = "seuemail@dominio.com.br";

// email body text
$body = "";
$body .= "Nome: ";
$body .= $name;
$body .= "\n";
$body .= "Email: ";
$body .= $email;
$body .= "\n";
$body .= "Mensagem: ";
$body .= $message;
$body .= "\n";

// send email
$success = mail($emailto, $subject, $body, $email);

// redirect to success page
if ($success && $errorMSG == ""){
    $verificacao = 1;
    header('Location: ../index.html#contact?confirm='.$verificacao.'');
}else{
    $verificacao = 0;
    header('Location: ../index.html#contact?confirm='.$verificacao.'');
}
?>