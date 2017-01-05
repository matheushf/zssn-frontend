angular.module('appZssn')
    .controller('PropertiesController', function ($scope, PropertiesApi) {

        $scope.fetch = function (id) {

            var items = PropertiesApi.fetch({person_id: id}, function () {
                $scope.items = items[0].item;
            });
        }
    });