app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'app/inicio/home.html',
			controller: 'inicioCtrl'
		})
    .when('/marcas',{
			templateUrl: 'app/marcas/listado.html',
			controller: 'marcasCtrl'
		})
    .when('/marca/:accion/:id',{
			templateUrl: 'app/marcas/simple.html',
			controller: 'marcasCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
