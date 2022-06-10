<?php
include "config.php";

$data = array();
$rut = $_GET['rut'];
//$contrasena = $_GET['contrasena'];
//$rut = $data['rut'];
$q = mysqli_query($mysqli, "SELECT rut FROM usuario WHERE rut= '".$rut."'");
//$q = mysqli_query($mysqli, "SELECT rut FROM usuario WHERE rut= '".$rut."' contrasena = '".$contrasena."'");
while ($row = mysqli_fetch_object($q)){
    $data[] = $row;
}
echo json_encode($data);
echo mysqli_error($mysqli);