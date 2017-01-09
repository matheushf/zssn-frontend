angular.module('appZssn')
    .factory('PeopleApi', function ($http, $resource, url) {

        url += '/people';

        return $resource(url, null,
            {
                save: {
                    method: 'POST',
                    url: url
                },
                get: {
                    method: 'GET',
                    url: url + '/:id'
                },
                getAll: {
                    method: 'GET',
                    isArray: true,
                    url: url
                },
                update: {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                    url: url + '/:id'
                },
                reportInfection: {
                    url: url + '/:id/report_infection',
                    method: 'POST'
                }
            });
    });