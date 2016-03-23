angular.module('app').controller('mvMainCtrl', function($scope,$resource ) {
    $scope.posts = $resource('/api/posts').query();
    $scope.title = 'Hello Conatcts';

    $(function () {
        $('#postsCarousel li').addClass('active');
        $('.item').addClass('active');
    });
});