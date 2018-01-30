var module = angular.module("myapp", [])
module.factory('memberDataStoreService', function($http) {
    var memberDataStore = {};
    memberDataStore.doRegistration = function(theData) {
        var promise = $http({ method: 'POST', url: 'https://facebook.com/memberservices/register', data: theData });
        return promise;
    }


    return memberDataStore;
}).controller("MyController", function($scope, memberDataStoreService) {

    $scope.person = {};
    $scope.person.newsletterOptIn = false;
    $scope.person.channels = [
        { value: "television", label: "Television" },
        { value: "radio", label: "Radio" },
        { value: "social-media", label: "Social Media" },
        { value: "other", label: "Other" }
    ];

    $scope.register = function() {

        $scope.firstNameInvalid = false;
        $scope.lastNameInvalid = false;
        $scope.emailInvalid = false;

        if (!$scope.registrationForm.firstName.$valid) {
            $scope.firstNameInvalid = true;
        }

        if (!$scope.registrationForm.lastName.$valid) {
            $scope.lastNameInvalid = true;
        }

        if (!$scope.registrationForm.email.$valid) {
            $scope.emailInvalid = true;
        }

        if (!$scope.registrationForm.research.$valid) {
            $scope.researchInvalid = true;
        }

        if ($scope.registrationForm.$valid) {
            $scope.working = true;
            var promise = memberDataStoreService.doRegistration($scope.person);

            promise.success(function(data, status) {
                $scope.showSuccessMessage = true;
            });
            promise.error(function(data, status) {
                if (status === 0) {
                    $scope.errorMessage = "network or http level issue";
                } else {
                    $scope.errorMessage = "response Http status is " + status
                }
                $scope.showErrorMessage = true;
            });
            promise.finally(function() {
                $scope.working = false;
            });

            $scope.doShow = true;
        }

    }

});