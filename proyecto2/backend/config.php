<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    $mysqli = mysqli_connect('localhost', 'root', '', 'bdoficial');
    //print_r($mysqli);
    die();
}

$mysqli = mysqli_connect('localhost', 'root', '', 'bdoficial');
    //print_r($mysqli);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$ret = [
    'result' => 'OK',
];
//print json_encode($ret);