angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/contacts', { templateUrl: '/partials/contacts/contactsList', controller: 'mvContactsListCtrl'})
        .when('/contacts/:_id', { templateUrl: '/partials/contacts/contactDetails', controller: 'mvContactDetailsCtrl'})

});