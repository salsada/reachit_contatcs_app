angular.module('app').controller('mvContactDetailsCtrl', function ($scope, $resource, $routeParams){
    var url = '/api/contacts/' + $routeParams._id;
    $scope.contact = $resource(url).get();
    console.log($scope.contact);
});