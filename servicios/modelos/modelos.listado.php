<?php
// Incluir la clase de base de datos
include_once("../clases/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT a.*, b.marca FROM modelos a
inner join marcas b on a.marca_id = b.id
ORDER BY a.modelo ASC";

echo Database::get_json_rows($sql);

?>
