'use strict';

angular.module('appZssn')
    .controller('PeopleController', function ($scope, $state, PeopleApi) {

            $scope.survivorId = null;

            if ($state.current.name == 'people.report-infection' && !$scope.allPeople) {
                PeopleApi.getAll(null, function (data) {
                    $scope.allPeople = data;
                });
            }

            $scope.addSurvivor = function () {

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

                console.log(reporter);

                return false;
                var reporterId = reporter.split('/');
                reporterId = reporterId[reporterId.length - 1];

                var survivorReportedId = survivorReported.split('/');
                survivorReportedId = survivorReported[survivorReported.length - 1];

                console.log(reporterId);
                return false;

                var peopleReport = PeopleApi.reportInfection({id: $scope.survivorId}, {
                    reporter,
                    survivorReported
                }, function () {
                    console.log(peopleReport);
                })
            };

            $scope.fetchAll = function () {
                var peopleEntries = PeopleApi.query(function () {
                    return peopleEntries;
                })
            };
        }
    );