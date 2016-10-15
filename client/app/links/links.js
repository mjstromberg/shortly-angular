angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  $scope.urlSearchString = '';
  
  Links.getAll()
    .then(function (links) {
      // console.log('before sort: ', links);
      links.sort(function(a, b) {
        return a.visits < b.visits;
      });
      // console.log('after sort: ', links);
      $scope.data.links = links;
    })
    .catch(function(error) {
      console.error(error);
    });

  $scope.filterLinks = function() {
    if ($scope.data.links) {
      return $scope.data.links.filter(function(link) {
        var regex = new RegExp($scope.urlSearchString);
        return regex.test(link.url);
      });
    }
  };

});
