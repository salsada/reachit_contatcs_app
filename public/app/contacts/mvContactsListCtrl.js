angular.module('app').controller('mvContactsListCtrl', function ($scope, $resource){
    $scope.contacts = $resource('/api/contacts').query();
})