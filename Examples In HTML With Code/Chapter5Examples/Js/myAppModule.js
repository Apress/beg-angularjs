angular.module('myAppModule', []);
angular.module('myAppModule').controller('myProductDetailCtrl', function($scope) {
    $scope.isHidden = true;
    $scope.showHideColors = function() {
        $scope.isHidden = !$scope.isHidden;
    }
});