'use strict';

/* Services */

var gamecatServices = angular.module('gamecatServices', ['ngResource']);

gamecatServices.factory('Game', ['$resource',
  function($resource){
    return $resource('games/:gameId.json', {}, {
      query: {method:'GET', params:{gameId:'games'}, isArray:true}
    });
  }]);
