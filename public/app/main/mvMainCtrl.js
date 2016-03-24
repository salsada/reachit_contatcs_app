angular.module('app').controller('mvMainCtrl', function($scope,$resource ) {
    $scope.posts = $resource('/api/posts').query();
    $scope.title = 'REACHIT Conatcts Application';
});