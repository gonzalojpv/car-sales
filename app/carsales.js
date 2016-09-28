'use strict';

var app = angular.module('carsales',['ngRoute', 'ui.mask']);

app.controller('MainCtrl', ['$scope','$http', function($scope,$http){

	$scope.menuSuperior = 'app/menu/menu.html';

	$scope.setActive = function( Opcion ) {

		$scope.mMarcas = "";

		$scope[Opcion] = "active";

	}

}]);
