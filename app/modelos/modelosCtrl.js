app.controller('modelosCtrl', [ '$scope', '$http', function( $scope, $http ) {

  $scope.modelos = {};
  $scope.marcas = {};
  $scope.posicion  = 5;
  $scope.setActive("mModelos");


  $http.get( 'servicios/marcas.listado.php' ).success( function( response ) {
    $scope.marcas = response;
  } );

  $http.get( 'servicios/modelos/modelos.listado.php' ).success( function( response ) {
    $scope.modelos = response;
  } );



  $scope.siguiente = function() {
		if ( $scope.modelos.length > $scope.posicion ) {
			$scope.posicion += 5;
		}
	};

	$scope.anteriores = function() {
		if ( $scope.posicion > 5 ) {
			$scope.posicion -= 5;
		}
	};

}]);
