angular.module('route',[])

	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

		$stateProvider
			// 正在热映
			.state({
				name: 'in_theaters',
				url: '/in_theaters/:page',
				templateUrl: './views/in_theaters/in_theaters.html',
				controller: 'in_theatersCtrl'
			})
			// 即将上映
			.state({
				name: 'coming_soon',
				url: '/coming_soon/:page',
				templateUrl: './views/coming_soon/coming_soon.html',
				controller: 'coming_soonCtrl'
			})
			.state({
				name: 'search',
				url: '/search/:keyword',
				templateUrl: './tpl/search.html',
				controller: 'searchCtrl'
			})

		$urlRouterProvider.otherwise('/in_theaters/1')

	}])