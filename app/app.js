var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            params:{content:undefined},
            controller: 'HomeController'
        })
        .state('UserCreate', {
            url: '/GestionUser',
            templateUrl: '/views/AddUser.html',
            params:{content:undefined},
            controller: 'navbarController'
        })
        .state('RegaloCreate', {
            url: '/GestionRegalo',
            templateUrl: '/views/AddGift.html',
            params:{content:undefined},
            controller: 'navbarController'
        })
        .state('Lista', {
            url: '/lista',
            templateUrl: '/views/YesList.html',
            params:{content:undefined},
            controller: 'navbarController'
        })
        .state('noEntregado', {
			url: '/noentregado',
			templateUrl: 'views/NoList.html',
			params:{content:undefined},
			controller: 'navbarController',
		});
}])
