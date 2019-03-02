<?php
    //initializes curl
    curl_init();
    //The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET

$city_id = htmlspecialchars($_POST['city_id']);

