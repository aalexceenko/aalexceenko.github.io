<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['mail'])&&$_POST['mail']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'xnyxnymrik@bk.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка с сайта'; //Загаловок сообщения
        $header_message='<html>
		                    <head>
		                        <title>'.$subject.'</title>
		                    </head>
		                    <body>
		                        <p><b>Имя</b>: '.$_POST['name'].'</p>
		                        <p><b>Номер телефона или почта</b>: '.$_POST['mail'].'</p>';
		$footer_message='</body>
                </html>';
        if((isset($_POST['discrabe'])&&$_POST['discrabe']!="")){
        	$message = $header_message.'<p><b>Текст</b>: '.$_POST['discrabe'].'</p>'.$footer_message;
        }
        else{
        	$message = $header_message.$footer_message;
        }
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <alexey.kurokhtin@gmail.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>