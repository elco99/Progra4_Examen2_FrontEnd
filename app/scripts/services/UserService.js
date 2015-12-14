angular.module('AngularScaffold.Services').factory('UserService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://danycheong-partedeapp.herokuapp.com/';
		return {
				GetUsers: function(){
					return $http.get(baseUrl + "v1/user/get");
				},
				PostUsers: function(payload){
					return $http.post(baseUrl + "v1/user/post", payload);
				},
				SaveUserChanges: function(payload){
					return $http.put(baseUrl + "v1/user/put", payload);
				}
	    };
}]);
