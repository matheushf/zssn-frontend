angular.module('appZssn')
    .factory('PropertiesApi', function ($http, $resource) {

        var url = 'http://zssn-backend-example.herokuapp.com/api/people/';

        return $resource(url + ':person_id', null, {
            trade: {
                method: 'POST',
                url: url + ':person_id/properties/trade_item'
            },
            fetch: {
                method: 'GET',
                isArray: true,
                url: url + ':person_id/properties'
            }
        })
    });