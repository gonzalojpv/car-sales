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
    .when('/marca/:accion',{
			templateUrl: 'app/marcas/simple.html',
			controller: 'marcasCtrl'
		})
		.when('/modelos',{
			templateUrl: 'app/modelos/listado.html',
			controller: 'modelosCtrl'
		})
		.when('/modelos/:accion/:id',{
			templateUrl: 'app/modelos/listado.html',
			controller: 'modelosCtrl'
		})
		.when('/modelo/:accion',{
			templateUrl: 'app/modelos/create.html',
			controller: 'modelosCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
