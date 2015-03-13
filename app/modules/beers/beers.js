(function() {
  'use strict';

  angular.module('myApp.beers', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/beers', {
      templateUrl: 'modules/beers/beers.html',
      controller: 'BeersCtrl'
    });
  }])

  .controller('BeersCtrl', BeersCtrl);

  function BeersCtrl($scope, $http) {
    $scope.msg = 'Listagem das cervejas';
    $scope.reverse = false;
    $scope.predicate = 'name';

    $scope.ordenar = function(predicate) {
      $scope.predicate = predicate;
      $scope.reverse = !$scope.reverse
    }

    var url = 'http://localhost:3000/api/beers'
      , method = 'GET'
      ;

    $http({
      url: url
    , method: method
    })
    .success(function(data) {
      $scope.cervejas = data;
      console.log('Sucesso', data);
    })
    .error(function(data) {
      console.log('Erro: ', data);
    });

  }

  BeersCtrl.$inject = ['$scope', '$http'];

})();