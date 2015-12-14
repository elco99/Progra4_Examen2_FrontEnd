angular.module('AngularScaffold.Controllers')
 .controller('UsersController', ['$scope', 'UserService','$state','$sessionStorage', function ($scope, UserService,$state,$sessionStorage) {
	$scope.users = [];
	$scope.user = {};
	$scope.userModif = {};

  if($state.params.content){
    $scope.prueba = $state.params.content.searched_value;
    $scope.imageName = $state.params.content.image;
    $scope.name = $state.params.content.name;
    $scope.description = $state.params.content.description;
    $scope.price = $state.params.content.price;
  }


	$scope.getUsers = function(){
		UserService.GetUsers().then(function(response){
  		$scope.users = response.data;
  	}).catch(function(err){
  		alert('Error fetching users')
  	});
	};

	$scope.postUsers = function(){
		UserService.PostUsers($scope.user).then(function(response){
	    alert("Creado Exitosamente");
	}).catch(function(err){
	    alert("Error posting to users");
		});
	}

  $scope.show_modificar_user = function(user){
    $scope.userModif.username = user.username;
    if (user.estado == true) {
      $scope.userModif.state = "true";
    }else{
      $scope.userModif.state = "false";
    };

  };

  $scope.saveUserChanges = function(){
    UserService.SaveUserChanges($scope.userModif).then(function(response){
      $scope.users = response.data;

    }).catch(function(err){
    });
  };

}]);
