angular.module('appZssn')
    .config(function () {
    })
    .run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {

            //todo
            setCurrentMenu($('.menu'), toState.name);
        });
    })
    .value('url', 'http://localhost:3000/api');
