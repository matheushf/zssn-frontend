'use strict';

angular.module('appZssn')
    .controller('PeopleController', function ($scope, $state, PeopleApi) {

        $scope.survivorId = null;
        $scope.success = false;

        // Add Survivor, map options
        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 4,
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

                        $scope.survivor.lonlat = 'POINT (' + marker.coords.latitude + ' ' + marker.coords.longitude + ')';
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

        // When loading the map, check if there's already coords
        $scope.reCenter = function () {
            if ($scope.survivor.lonlat) {
                // haaack to get lat and lng
                var temp = $scope.survivor.lonlat.split(' ');
                var lat = temp[1].split('(')[1];
                var lng = temp[2].split(')')[0];

                $scope.map.center = {
                    latitude: lat,
                    longitude: lng
                };

                $scope.marker.coords = {
                    latitude: lat,
                    longitude: lng
                };

            }
        };

    })
    .controller("PeopleControllerAdd", function ($scope, $sce, $controller, PeopleApi) {
        angular.extend(this, $controller('PeopleController', {$scope: $scope}));

        $scope.addSurvivor = function () {

            //Get the items values and make the string
            var string_value = "";
            $(".item-name").each(function () {
                string_value += $(this).attr("id") + ":" + $(this).val() + ";";
            });
            if (string_value)
                $scope.survivor.items = string_value;

            var peopleEntry = PeopleApi.save($scope.survivor, function () {
                if (peopleEntry) {
                    console.log(peopleEntry);
                    $scope.message = "Survivor added with success! User ID: " + peopleEntry.id;
                    $scope.labelType = "success";
                    $("form")[0].reset();
                } else {
                    $scope.message = "Error, try another name.";
                    $scope.labelType = "alert";
                }
            });
        };

        $scope.addItem = function (item) {
            window.tabelaHtml += '<tr><td>' + item + '</td></tr>';

            $scope.itemsHtml = $sce.trustAsHtml(tabelaHtml);

        };

    }).controller("PeopleControllerEdit", function ($scope, $controller, PeopleApi) {
    angular.extend(this, $controller('PeopleController', {$scope: $scope}));

    $scope.searchSurvivor = function (id) {

        // Change the map to the right position, from the survivor
        var peopleEntry = PeopleApi.get({
            id: id
        }, function () {

            $scope.survivor = {
                name: peopleEntry.name,
                age: peopleEntry.age,
                gender: peopleEntry.gender,
                lonlat: peopleEntry.lonlat
            };

            $scope.reCenter();

        });
    };

    // Edit info about a survivor
    $scope.editSurvivor = function () {

        var peopleEntry = PeopleApi.update({id: $scope.survivorId}, $scope.survivor, function () {
            if (peopleEntry) {
                $scope.message = "Survivor edited with success!";
                $scope.labelType = "success";
                $("form")[0].reset();
            } else {
                $scope.message = "Error, try another name.";
                $scope.labelType = "alert";
            }
        });
    };

}).controller("PeopleControllerReportInfection", function ($scope, $controller, PeopleApi) {
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

            if (peopleReport) {
                $scope.message = "Infection reported with success!";
                $scope.labelType = "success";
                $("form")[0].reset();
            } else {
                $scope.message = "Error, another time.";
                $scope.labelType = "alert";
            }

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
