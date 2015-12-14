angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', '$sessionStorage', function ($scope, HomeService, $sessionStorage) {
    	$scope.title = "Tabla de estudiantes de programamción 4."
      $scope.exampleObject = {text: "Hola, Mundo"}
      $scope.regalos = [];
      $scope.regalo = {};

      $scope.getRegalos = function(){
        HomeService.GetRegalos().then(function(response){
          $scope.regalos = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postRegalos = function(){
        HomeService.PostRegaloss($scope.regalo).then(function(response){
          alert("Posted to /regalos");
          $scope.getregalos();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      /*$scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }*/

  }]);
