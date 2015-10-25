(function () {
  'use strict';
  angular.module('frontendApp').directive('homeSearchBox', function () {
    return {
      restrict: 'EA',
      templateUrl: '/views/directives/homeSearchBox.html',
      scope: {
        searchTerm: '@',
        searchType: '@',
        prompt: '@'
      },
      controller: function ($scope, $location) {

        $scope.onSubmit = function() {
          $location.path('/results/' + $scope.searchType + '/' + $scope.searchTerm);
        };


      }
    };
  });

}).call(this);