'use strict';

/**
 * @ngdoc function
 * @name nextStepApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nextStepApp
 */
angular.module('nextStepApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
