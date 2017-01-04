angular.module('appZssn')
    .factory('PeopleApi', function ($http, $resource) {
        return $resource('http://zssn-backend-example.herokuapp.com/api/people', null,
            {
                save: {
                    method: 'POST',
                    url: 'http://zssn-backend-example.herokuapp.com/api/people'
                },
                get: {
                    method: 'GET',
                    url: 'http://zssn-backend-example.herokuapp.com/api/people/:id'
                },
                update: {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json;charset=utf-8'}
                },
                reportInfection: {
                    url: 'http://zssn-backend-example.herokuapp.com/api/people/:id/report_infection',
                    method: 'POST'
                }
            });
    });