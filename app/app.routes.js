angular.module('appZssn')
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/home.html'
            })
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
    }]);