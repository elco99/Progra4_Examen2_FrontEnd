angular.module('AngularScaffold.Services').factory('GiftService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://danycheong-partedeapp.herokuapp.com/';
		return {
				GetGifts: function(){
					return $http.get(baseUrl + "v1/gift/get");
				},
				PostGifts: function(payload){
					return $http.post(baseUrl + "v1/gift/post", payload);
				},
				SaveGiftChanges: function(payload){
					return $http.put(baseUrl + "v1/gift/put", payload);
				}
	    };
}]);
