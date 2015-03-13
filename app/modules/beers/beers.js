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

  function BeersCtrl($scope) {
    $scope.msg = 'Listagem das cervejas';
  }

  BeersCtrl.$inject = ['$scope'];

})();