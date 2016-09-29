<?php
// Incluir la clase de base de datos
include_once("clases/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT * FROM marcas ORDER BY marca DESC";

echo Database::get_json_rows($sql);

?>
