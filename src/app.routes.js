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
                controller: 'PeopleControllerAdd'
            })
            .state('people.edit', {
                url: '/people.edit',
                templateUrl: 'modules/people/people.edit.html',
                controller: 'PeopleControllerEdit'
            })
            .state('people.report-infection', {
                url: '/people.report-infection',
                templateUrl: 'modules/people/report-infection.html',
                controller: 'PeopleControllerReportInfection'
            })

            // PROPERTIES
            .state('properties', {
                url: '/properties',
                templateUrl: 'modules/properties/properties.html',
                controller: 'PropertiesController'
            })
            .state('properties.trade-items', {
                url: '/properties.trade-items',
                templateUrl: 'modules/properties/trade-items',
                controller: 'PropertiesController'
            })
            .state('properties.fetch-items', {
                url: '/properties.fetch-items',
                templateUrl: 'modules/properties/fetch-items',
                controller: 'PropertiesController'
            })
    }]);