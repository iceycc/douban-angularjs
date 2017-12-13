angular.module('app',[
	'ui.router',
	'route',
	'public',
	'in_theatersModule',
	'coming_soonModule'
])

	

	.controller('searchCtrl',['$stateParams','myService','$scope',function($stateParams,myService,$scope){
	
		myService.myJsonp(myService.url + '/v2/movie/search',{
			q:$stateParams.keyword
		},function(res){

			console.log(res);

			$scope.result = res;

			$scope.$apply();

		})

	}])

	.controller('navBarCtrl',['$scope','$location',function($scope,$location){

		$scope.searchFn = function(){

			if(!$scope.keyword){

				alert('请输入搜索关键字');

				return;
			}

			// 跳转到搜索结果页面并且将用户输入的内容传递过去
			$location.path('/search/'+$scope.keyword);


		}

	}])





