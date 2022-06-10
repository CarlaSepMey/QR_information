<?php
include  "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
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


$q = mysqli_query($mysqli, "UPDATE 'usuario' SET 'rut' = '$rut' ,'primer_nombre' = '$primer_nombre','segundo_nombre' = '$segundo_nombre','apellido_paterno' = '$apellido_paterno',
    'apellido_materno' = '$apellido_materno','telefono' = '$telefono', 'correo' = '$correo', 'contrasena' = '$contrasena','fecha_nacimiento' = '$fecha_nacimiento'
    WHERE 'rut'= '{$rut}' LIMIT 1");

if($q){
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);