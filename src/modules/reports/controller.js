angular.module("appZssn")
    .controller("ReportsController", function ($scope, ReportsApi) {

        $scope.reports = {
            infected: null,
            non_infected: null,
            people_inventory: null,
            infected_points: null
        };

        ReportsApi.infected(function (data) {
            console.log(data);
            $scope.reports.infected = data;
        });

        ReportsApi.non_infected(function (data) {
            $scope.reports.non_infected = data;
        });

        ReportsApi.people_inventory(function (data) {
            $scope.reports.people_inventory = data;
        });

        ReportsApi.infected_points(function (data) {
            $scope.reports.infected_points = data;
        });

    });