angular.module('in_theatersModule',[])

	.controller('in_theatersCtrl',['myService','$scope','$stateParams','$location',function(myService,$scope, $stateParams, $location){


		// start 从第几条数据开始取	
		// count 当前请求要取多少条数据
		/*
			1 10 0~9
			2 10 10~19
			3 10 20~29

			start = (page - 1)*10

		*/
		
		// 当前页
		var page = $stateParams.page;

		// 请求数据的数量
		var count = 10;

		// 从第几条开始取
		var start = (page - 1) * count;

		// 总页数 Math.ceil(总条数/10)
		var totalPage = 0;

		
		// 当我们使用自己封装的方法去请求数据的时候 angularjs监控不到
		// html => js    js => html

		myService.myJsonp(myService.url +'/v2/movie/in_theaters',{
			start: start,
			count: count
		},function(res){

			console.log(res);

			// 计算总页数
			totalPage = Math.ceil(res.total/count)

			// 将数据展示在页面中
			$scope.result = res;

			// 告诉angularjs 说 js中的数据变了 你帮我去更新一下html页面吧
			$scope.$apply();

		});


		$scope.changePage = function(type){

			if(type == 'prev'){

				// 上一页
				page--;

				if(page < 1){

					page = 1;

				}

			}else if(type == 'next'){

				// 下一页
				page++;

				// 如果当前页大于总页数 当前页等于总页数
				if(page > totalPage){

					page = totalPage;

				}

			}

			// 路由跳转
			$location.path('/in_theaters/' + page);

		}

	}])