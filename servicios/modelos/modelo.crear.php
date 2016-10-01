<?php
// Incluir la clase de base de datos
include_once("../clases/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$request['modelo'] = strtoupper($request['modelo']);


$sql = "INSERT INTO modelos(modelo, marca_id )
		VALUES ( '". $request['modelo'] ."',
				 ".$request['marca_id']." )";

$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {
	$Respuesta = json_encode( array('err' => false, 'mensaje'=>'Registro Insertado.' ));
}else{
	$Respuesta = json_encode( array('err' => true, 'mensaje'=> $Hecho ));
}

echo $Respuesta;

?>
