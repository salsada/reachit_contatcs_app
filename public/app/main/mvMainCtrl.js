angular.module('app').controller('mvMainCtrl', function($scope,$resource ) {
    $scope.posts = $resource('/api/posts').query();
    $scope.title = 'Hello Conatcts';

    $(function () {
        var x = -1;
        $('#postsCarousel li').each().attr('data-slide-to', x++);
        $('#postsCarousel li').addClass('active');
        $('.item').addClass('active');
    });
});