routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvier) {
    $locationProvier.html5Mode(true);
    $urlRouterProvider.otherwise('/people');
}