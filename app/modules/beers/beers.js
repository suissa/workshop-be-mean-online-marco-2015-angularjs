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
    $scope.reverse = false;
    $scope.predicate = 'name';

    $scope.ordenar = function(predicate) {
      $scope.predicate = predicate;
      $scope.reverse = !$scope.reverse
    }
  // criamos um array de cervejas
    var cervejas = [{
      name: 'Kaiser', price: 2
      }, {
        name: 'Skol', price: 3
      }, {
        name: 'Glacial', price: 4
      }, {
        name: 'Polar', price: 6
      }, {
        name: 'Heineken', price: 10
      }
    ];
  // instanciamos nosso array no nosso scope
  // para que tenhamos acesso à esse array na View
    $scope.cervejas = cervejas;
  }

  BeersCtrl.$inject = ['$scope'];

})();