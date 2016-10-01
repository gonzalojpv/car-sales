<?php
// Incluir la clase de base de datos
include_once("../clases/class.Database.php");

// Retorna un json
header('Content-Type: application/json;');

// Verificar que venga el parametro
if (!isset($_GET['c'])) {
	echo json_encode( array('err' => true,'mensaje'=>"Falta el código") );
	die;
}

// Desinfectar el parametro
$codigo = htmlentities($_GET['c']);


// Verificar si existe
$sql = "SELECT count(*) as Existe FROM marcas WHERE id = ".$codigo;
$existe = Database::get_valor_query($sql,"Existe");


if ($existe == 1) {
	// Si existe, imprime el json
  $sql = "SELECT a.*, b.marca FROM modelos a
  inner join marcas b on a.marca_id = b.id
  WHERE id = ".$codigo;

	echo json_encode( Database::get_Row($sql) );

}else{

	echo json_encode( array('err'=>true, 'mensaje'=>'Marca no existe') );

}


?>
