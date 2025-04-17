  <?php

    if (isset($_POST['name']) && isset($POST['inst'])) {
        $token = "7905418297:AAFtITXnSeOq3VZpmeUYIpMyEilQe16rKS0";
        $chat_id = "-4621327766";
        $arr = array(
            'Имя пользователя: ' => $name,
            'Инстаграм: ' => $inst,
        );

        $txt = "";
        foreach ($arr as $key => $value) {
            $txt .= "<b>" . $key . "</b> " . $value . "%0A";
        }

        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

        if ($sendToTelegram) {
            header('Location: good.html');
        } else {
            echo "Ошибка при отправке сообщения в Telegram.";
        }
    } else {
        echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон.";
    }
    ?>