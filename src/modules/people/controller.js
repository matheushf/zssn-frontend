'use strict';

angular.module('appZssn')
    .controller('PeopleController', function ($scope, $state, PeopleApi) {

            $scope.survivorId = null;

            // Add Survivor, map options
            if ($state.current.name == 'people.add') {
                $scope.map = {
                    center: {
                        latitude: 45,
                        longitude: -73
                    },
                    zoom: 8,
                    events: {
                        // Change the marker position on the map with the click
                        click: function (mapModel, eventName, originalEventArgs) {

                            $scope.$apply(function () {
                                var e = originalEventArgs[0];
                                var marker = {};
                                marker.coords = {};
                                marker.coords.latitude = e.latLng.lat();
                                marker.coords.longitude = e.latLng.lng();
                                $scope.marker.coords = marker.coords;

                                $scope.survivor.location = 'POINT (' + marker.coords.longitude + ' ' + marker.coords.latitude + ')';
                            });
                        }
                    }
                };

                $scope.marker = {
                    id: "first",
                    coords: {
                        latitude: 45,
                        longitude: -73
                    },
                    options: {
                        draggable: true,
                        clickable: true
                    }
                };
            }

        }
    )
    .controller("PeopleControllerAdd", function ($scope, $controller, PeopleApi) {

        angular.extend(this, $controller('PeopleController', {$scope: $scope}));

        $scope.addSurvivor = function () {

            console.log($scope.survivor);
            return;


            var peopleEntry = PeopleApi.save($scope.survivor, function () {
                console.log(peopleEntry);
            });
        };

    })
    .controller("PeopleControllerEdit", function ($scope, $controller, PeopleApi) {
        angular.extend(this, $controller('PeopleController', {$scope: $scope}));

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

        // Edit info about a survivor
        $scope.editSurvivor = function () {
            var peopleEdit = PeopleApi.update({id: $scope.survivorId}, $scope.survivor, function () {
                console.log(peopleEdit);
            });
        };

    })
    .controller("PeopleControllerReportInfection", function ($scope, $controller, PeopleApi) {
        angular.extend(this, $controller('PeopleController', {$scope: $scope}));


        // Report survivors infected
        $scope.reportInfected = function (reporterId, survivorReported) {

            if (typeof reporter == 'undefined' || typeof survivorReported == 'undefined')
                return false;

            /*var reporterId = reporter.split('/');
             reporterId = reporterId[reporterId.length - 1];*/

            var survivorReportedId = survivorReported.split('/');
            survivorReportedId = survivorReportedId[survivorReportedId.length - 1];

            var peopleReport = PeopleApi.reportInfection({id: survivorReportedId}, {
                infected: reporterId,
                id: survivorReportedId
            }, function () {
                console.log(peopleReport);

            })
        };

        $scope.fetchAll = function () {
            var peopleEntries = PeopleApi.query(function () {
                return peopleEntries;
            })
        };

        PeopleApi.getAll(null, function (data) {
            $scope.allPeople = data;
        });

    });
