'use strict';

app.controller( 'marcasCtrl', [ '$scope', '$http', '$routeParams', function( $scope, $http, $routeParams ) {

  var accion = $routeParams.accion,
    id = $routeParams.id;

  $scope.setActive("mMarcas");

  $scope.marcas    = {};
  $scope.marca     = {};
  $scope.posicion  = 5;
  $scope.mensaje   = '';
  $scope.formTitle = accion;

  switch ( accion ) {
    case 'editar':
    case 'ver':
      $http.get( 'servicios/marca.get.php?c=' + id ).success( function( response ) {
        $scope.marca = response;
      } );
      break;
    case 'crear':
      break;
    default:
      $http.get( 'servicios/marcas.listado.php' ).success( function( response ) {
        $scope.marcas = response;
      } );
  }



  $scope.siguiente = function() {
		if ( $scope.marcas.length > $scope.posicion ) {
			$scope.posicion += 5;
		}
	};

	$scope.anteriores = function() {
		if ( $scope.posicion > 5 ) {
			$scope.posicion -= 5;
		}
	};

  $scope.esAccion = function( accion ) {
    return ( accion == $scope.formTitle? true : false );
  };

  $scope.guardarMarca = function() {

    accion = ( 'editar' == accion? 'guardar' : accion );

    $http.post( 'servicios/marca.' + accion + '.php', $scope.marca ).success( function( response ) {
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

  $scope.eliminarMarca = function() {
    $http.post( 'servicios/marca.eliminar.php', $scope.marca ).success( function( response ) {
      $scope.mensaje = response.mensaje;

      if ( response.err === false ) {
        console.log( response );
        setTimeout( function() {
          $scope.mensaje = '';
          $scope.$apply();
          window.location = '#/marcas';
        }, 3200 )
      }
    } );
  }

} ] );
