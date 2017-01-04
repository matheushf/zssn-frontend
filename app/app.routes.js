angular.module('appZssn')
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            // HOME
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/home.html'
            })
                
            // PEOPLE
            .state('people', {
                url: '/people',
                templateUrl: 'modules/people/people.html',
                controller: 'PeopleController'
            })
            .state('people.add', {
                url: '/people.add',
                templateUrl: 'modules/people/people.add.html',
                controller: 'PeopleController'
            })
            .state('people.edit', {
                url: '/people.edit',
                templateUrl: 'modules/people/people.edit.html',
                controller: 'PeopleController'
            })
            .state('people.report-infection', {
                url: '/people.report-infection',
                templateUrl: 'modules/people/people.report-infection.html',
                controller: 'PeopleController'
            })
                
            // PROPERTIES
            .state('properties', {
                url: '/properties',
                templateUrl: 'modules/properties/properties.html',
                controller: 'PropertiesController'
            })
    }]);