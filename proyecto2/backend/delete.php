<?php
include "config.php";
$input = file_get_contents('php://input');
$message = array();

$rut = $_GET['rut'];
$q = mysqli_query($con, "DELETE FROM 'usuario' WHERE 'rut' = '{$rut}' LIMIT 1");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);