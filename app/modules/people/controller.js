'use strict';

angular.module('appZssn')
    .controller('PeopleController', function ($scope, PeopleApi) {

            $scope.survivorId = null;

            $scope.addSurvivor = function () {
                console.log($scope.survivor);

                var peopleEntry = PeopleApi.save($scope.survivor, function () {
                    console.log(peopleEntry);
                });
            };

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

            $scope.reportInfected = function (reporter, survivorReported) {
                var peopleReport = PeopleApi.reportInfection({id: $scope.survivorId}, {
                    reporter,
                    survivorReported
                }, function () {
                    console.log(peopleReport);
                })
            };

            $scope.fetchAll = function () {
                var peopleEntries = PeopleApi.query(function () {
                    console.log(peopleEntries)
                })
            };
        }
    );