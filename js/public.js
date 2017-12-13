angular.module('public',[])

	.service('myService',[function(){

		this.url = "https://api.douban.com";

		this.myJsonp = function(url,data,callback){

			// 0.8799898234 =>  myJsonp_08799898234 随机生成函数的名字
			var fnName = 'myJsonp_' + Math.random().toString().replace('.','');

			// 将生成的函数的名字挂载到全局 并且将callback赋值给这个变量
			window[fnName] = callback;

			// http://www.example.com?a=1&b=2&callback=函数名字
			// data => { a:1,b:2 }

			var querystring = '';

			for(var attr in data){

				querystring += attr + '=' + data[attr] + '&';

				// a=1&b=2&callback

			}

			var script = document.createElement('script');

			script.src = url + '?' + querystring + 'callback=' + fnName;

			// 当请求完成时
			script.onload = function(){

				// 将页面中刚才追加的script标签删掉
				document.body.removeChild(script);

			}

			// 将script标签追加到页面中 发送请求
			document.body.appendChild(script);

		}

	}])