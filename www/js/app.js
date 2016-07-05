// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('cidadesegura', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom'); //bottom
        
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('reportar', {
                url: '/reportar',
                templateUrl: 'templates/reportar.html',
                controller: 'ReportarCtrl'
            })
            .state('consultar', {
                url: '/consultar',
                templateUrl: 'templates/consultar.html',
                controller: 'ConsultarCtrl'
            })
            .state('map1', {
                url: '/map1',
                templateUrl: 'templates/map1.html',
                controller: 'ConsultarCtrl'
            })
            .state('map2', {
                url: '/map2',
                templateUrl: 'templates/map2.html',
                controller: 'ConsultarCtrl'
            })
            .state('map3', {
                url: '/map3',
                templateUrl: 'templates/map3.html',
                controller: 'ConsultarCtrl'
            })
            .state('estatistica', {
                url: '/estatistica',
                templateUrl: 'templates/estatistica.html',
                controller: 'EstatisticaCtrl'
            });
        $urlRouterProvider.otherwise('/home');
    });
