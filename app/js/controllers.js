'use strict';

/* Controllers */

var gamecatControllers = angular.module('gamecatControllers', []);

gamecatControllers.controller('GameListCtrl', ['$scope', 'Game',
  function($scope, Game) {
    $scope.games = Game.query();
    $scope.orderProp = 'age';
  }]);

gamecatControllers.controller('GameDetailCtrl', ['$scope', '$routeParams', 'Game',
  function($scope, $routeParams, Game) {
    $scope.game = Game.get({gameId: $routeParams.gameId}, function(game) {
      $scope.mainImageUrl = game.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
