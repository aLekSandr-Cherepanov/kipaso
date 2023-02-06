<?php

$servername = "localhost";
$database = "u0037735_testkipaso";
$username = "u0037735_default";
$password = "_OTysmW2";

// Создаем соединение
$connect = mysqli_connect($servername, $username, $password, $database);
    if (!$connect) {
        die ('Error connect to database!');
    }
?>