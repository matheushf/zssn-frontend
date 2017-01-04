'use strict';

angular.module('appZssn')
    .controller('PeopleController', function ($scope, PeopleApi) {

        $scope.survivorId = null;
        
            /*var peopleEntry = PeopleApi.get({
             id: '55490924-68f4-4fca-8b9c-d6b8cfdd41f4'
             }, function () {
             console.log(peopleEntry);
             });

             var peopleEntries = PeopleApi.query(function () {
             console.log(peopleEntries)
             });*/

            $scope.searchSurvivor = function (id) {

                var peopleEntry = PeopleApi.get({
                    id: id
                }, function () {
                    console.log(peopleEntry);

                    $scope.survivor = {
                        name: peopleEntry.name,
                        age: peopleEntry.age,
                        gender: peopleEntry.gender,
                        lonlat: peopleEntry.lonlat
                    };
                });
            };

            $scope.editSurvivor = function () {
                var peopleEdit = PeopleApi.update({id: $scope.survivorId}, $scope.survivor, function () {
                    console.log(peopleEdit);
                });
            };

        }
    );