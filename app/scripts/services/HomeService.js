angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {
				GetRegalos: function(){
					return $http.get(baseUrl + "v1/regalos");
				},
				PostRegalos: function(payload){
					return $http.post(baseUrl + "v1/regalo", payload);
				}
	    };
}]);
