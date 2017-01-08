angular.module('appZssn')
    .config(function () {
    })
    .run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {

            /*console.log("$stateChangeStart " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));*/

            setCurrentMenu($('.menu'), toState.name);
            // console.log(toState.name);
        });
    });