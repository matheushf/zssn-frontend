angular.module('appZssn')
    .factory('PeopleApi', function ($http, $resource) {
        return $resource('http://zssn-backend-example.herokuapp.com/api/people/:id', {id: 'id'},
            {
                update: {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json;charset=utf-8'}
                }
            });
    });