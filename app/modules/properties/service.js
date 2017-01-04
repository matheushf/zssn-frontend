angular.module('appZssn')
    .factory('PropertiesApi', function ($http, $resource) {
        return $resource('http://zssn-backend-example.herokuapp.com/api/people/:person_id', null, {
            trade: {
                method: 'POST',
                url: 'http://zssn-backend-example.herokuapp.com/api/people/:person_id/properties/trade_item'
            },
            fetch: {
                method: 'GET',
                isArray: true,
                url: 'http://zssn-backend-example.herokuapp.com/api/people/:person_id/properties'
            }
        })
    });