var elfApp = angular.module('elfApp');

elfApp.controller('FirstController', function($scope) {
    'use strict';

    $scope.description = 'FirstController Data';

});

elfApp.directive('elfFirstDescription', function() {
    'use strict';
    return {
        controller: 'FirstController',
        templateUrl: 'first-controller'
    };
});