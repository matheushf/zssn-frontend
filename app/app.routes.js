angular.module('appZssn')
    .config(["$stateProvider", function ($stateProvider) {
       $stateProvider
           .state('home', {
               url: '/home',
               templateUrl: 'modules/people/people.html'
           })
    }]);