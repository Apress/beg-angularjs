angular.module("myapp", [])
    .controller("MyController", function($scope) {
        var person = {
            firstName: "Jimmy",
            age: 21,
            address: {
                street: '16 somewhere drive',
                suburb: 'Port Kennedy',
                state: 'Western Australia'
            }
        }
        $scope.person = person;
    });