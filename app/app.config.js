"use strict";
angular
    .module("ProfileApp")
    .config(["$routeProvider", function($routeProvider) { // $routeProvider is the service we are injecting. second aspect takes $routeProvider as a dependency
        $routeProvider
            .when("/form", {
                template:"<profilepage></profilepage>"
            })
            .when("/edit", {
                template:"<editprofile></editprofile>"
            })
    }]);