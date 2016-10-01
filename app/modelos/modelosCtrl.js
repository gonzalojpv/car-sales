app.controller('modelosCtrl', [ '$scope', '$http', '$routeParams', function( $scope, $http, $routeParams ) {

  var accion = $routeParams.accion,
    id = $routeParams.id;

  $scope.modelos = {};
  $scope.modelo = {};
  $scope.marcas = {};
  $scope.posicion  = 5;
  $scope.mensaje   = '';
  $scope.formTitle = accion;
  $scope.setActive("mModelos");

  $http.get( 'servicios/marcas.listado.php' ).success( function( response ) {
    $scope.marcas = response;
  } );

  switch (accion) {
    case 'create':

      break;
    case 'editar':
      $http.get( 'servicios/marca.get.php?c=' + id ).success( function( response ) {
        $scope.modelo = response;
      } );
      break;
    default:
      $http.get( 'servicios/modelos/modelos.listado.php' ).success( function( response ) {
        $scope.modelos = response;
      } );
      break
  }

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

  $scope.guardarModelo = function() {
    accion = ( 'editar' == accion? 'guardar' : accion );
    $http.post( 'servicios/modelos/modelo.' + accion + '.php', $scope.modelo ).success( function( response ) {
      $scope.mensaje = response.mensaje;

      if ( response.err === false ) {
        console.log( response );
        setTimeout( function() {
          $scope.mensaje = '';
          $scope.$apply();
        }, 3200 )
      }
    } );
  };

  $scope.eliminarModelo = function() {
    alert(12);
  }

  $scope.esAccion = function( accion ) {
    return ( accion == $scope.formTitle? true : false );
  };

}]);
