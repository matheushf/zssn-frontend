routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('people', {
            url: '/',
            template: require('./people.html'),
            controller: 'PeopleController',
            controllerAs: 'people'
        });
}