'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ConfigCtrl
 * @description Angular controller for dealing with configuration.
 */
angular.module('clientApp')
  .controller('ConfigCtrl', function ($scope, $http) {
    $scope.reset = function() {
      $http.get('/api/config').then(function(response) {
        $scope.saveModel = 'reset';
        $scope.config = response.data;
      });
    };

    $scope.modified = function() {
      $scope.saveModel = 'modified';
    };

    $scope.save = function() {
      $http.put('/api/config', $scope.config)
        .then(function success() {
          $scope.reset();
        }, function error() {
          $scope.modified();
        });
    };

    $scope.reset();
  });