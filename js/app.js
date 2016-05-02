// API key 6e36eb9ea6daa78ac2eb229e81853823

var app = angular.module('myApp', ['ngAnimate']);
app.controller('oneController',function($scope, $http){
$scope.results = [];
$scope.searching = false;

$scope.search = function () {
$scope.searching = true;
$http({
  method: 'GET',
  url: 'https://api.flickr.com/services/rest',
  params : {
    method: 'flickr.photos.search',
    api_key: '6e36eb9ea6daa78ac2eb229e81853823',
    text: $scope.search.tag,
    format: 'json',
    nojsoncallback: 1
  }
})
.success(function (data) {
$scope.results = data;
$scope.searching = false;
})
.error(function (error) {
  console.error(error);
  $scope.searching = true;
});
};
});
