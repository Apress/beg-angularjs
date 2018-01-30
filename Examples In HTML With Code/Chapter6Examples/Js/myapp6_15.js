angular.module("myapp", [])
    .controller("MyController", function($scope) {
        var person = {};
        person.newsletterOptIn = false;
        person.channels = [
            { value: "television", label: "Television" },
            { value: "radio", label: "Radio" },
            { value: "social-media", label: "Social Media" },
            { value: "other", label: "Other" }
        ];
        person.register = function() {

        }
    });