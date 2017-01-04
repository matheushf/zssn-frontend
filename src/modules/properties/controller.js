angular.module('appZssn')
    .controller('PropertiesController', function ($scope, PropertiesApi) {

        $scope.fetch = function (id) {

            var items = PropertiesApi.fetch({person_id: id}, function () {
                // console.log(items[0].item);

                $scope.items = items[0].item;
            });
        }
    });