var mbcfApp = angular.module('mbcfApp',[
  'ui.router'
]);

mbcfApp.config( [ '$stateProvider', '$urlRouterProvider', '$locationProvider',
        function( $stateProvider, $urlRouterProvider, $locationProvider ) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('/home', {
            url: '/',
            templateUrl: 'app/partials/home.html'
        })
        .state('/instrumentation', {
            url: '/instrumentation',
            templateUrl: 'app/partials/instrumentation.html'
        });

} ] );


