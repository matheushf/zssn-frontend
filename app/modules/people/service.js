angular.module('appZssn')
    .factory('PeopleApi', function ($resource) {
        return $resource('http://zssn-backend-example.herokuapp.com/api/people/:id');
    });