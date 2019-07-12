angular.module("shopping", []).controller("mainCtrl", function($scope, $http) {
  $scope.items = [];

  function _getItems() {
    $http.get("/api/items").then(function(data) {
      $scope.items = data.data;
    });
  }

  _getItems();
});
