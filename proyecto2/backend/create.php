<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$rut = $data['rut'];
$primer_nombre = $data['primer_nombre'];
$segundo_nombre = $data['segundo_nombre'];
$apellido_paterno = $data['apellido_paterno'];
$apellido_materno = $data['apellido_materno'];
$telefono = $data['telefono'];
$correo = $data['correo'];
$contrasena = $data['contrasena'];
$fecha_nacimiento = $data['fecha_nacimiento'];

$q = mysqli_query($mysqli,"INSERT INTO usuario (rut, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, 
correo, contrasena, estado, fecha_nacimiento) 
VALUES ('$rut','$primer_nombre','$segundo_nombre','$apellido_paterno', '$apellido_materno', '$correo', '$contrasena', 1, 
'$fecha_nacimiento')");



if($q) {
    http_response_code(201);
    $message['status'] = "OPERATIVO";

}else{
    http_response_code(422);
    $message['status'] = "ERROR";

}

echo json_encode($message);
echo mysqli_error($mysqli);
