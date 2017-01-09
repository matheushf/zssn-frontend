angular.module('appZssn')
    .factory('ReportsApi', function ($http, $resource, url) {

        url += "/report/";

        return $resource(url, null, {
            infected: {
                method: 'GET',
                url: url + 'infected'
            },
            non_infected: {
                method: 'GET',
                url: url + 'non_infected'
            },
            people_inventory: {
                method: 'GET',
                url: url + 'people_inventory'
            },
            infected_points: {
                method: 'GET',
                url: url + 'infected_points'
            }
        })
    });