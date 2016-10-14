angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $location.path('/signin');
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.addOne(link);
  };
});
