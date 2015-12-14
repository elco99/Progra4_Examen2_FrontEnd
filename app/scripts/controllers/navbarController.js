angular.module('AngularScaffold.Controllers')
  .controller('navbarController', ['AuthService', '$scope', '$rootScope','$state', '$sessionStorage',  function (authService, $scope, $rootScope,$state, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.goGestionUser = function(){
        $state.go('UserCreate');
      }

      $scope.goGestionRegalos = function(){
        $state.go('RegaloCreate');
      }

      $scope.goLista = function(){
        $state.go('Lista');
      }

      $scope.goNoLista = function(){
        $state.go('noEntregado');
      }

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, scope: ['admin']};
        authService.Register(user).then(function(response){
          alert('Registered in correctly!');
          $scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }
  }]);
