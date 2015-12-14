angular.module('AngularScaffold.Controllers')
 .controller('GiftController', ['$scope', 'GiftService','$state','$sessionStorage', function ($scope, GiftService,$state,$sessionStorage) {
	$scope.gifts = [];
	$scope.gift = {};
	$scope.giftModif = {};



	$scope.getGift = function(){
		GiftService.GetGifts().then(function(response){
  		$scope.gifts = response.data;
  	}).catch(function(err){
  		alert('Error fetching gifts')
  	});
	};

	$scope.postgifts = function(){
		GiftService.PostGifts($scope.gift).then(function(response){
	    alert("Creado Exitosamente");
	}).catch(function(err){
	    alert("Error posting to gifts");
		});
	}

  $scope.show_modificar_gift = function(product){
    $scope.giftModif.nombre = product.nombre;
    $scope.giftModif.descripcion = product.descripcion;
    $scope.giftModif.peso = product.peso;
    $scope.giftModif.destinario = product.destinario;
    $scope.giftModif.status = product.status;
    if (product.estado == true) {
      $scope.giftModif.estado = "true";
    }else{
      $scope.giftModif.estado = "false";
    };

  };

  $scope.savegiftChanges = function(){
    GiftService.SaveGiftChanges($scope.giftModif).then(function(response){
      $scope.gifts = response.data;

    }).catch(function(err){
    });
  };

}]);
