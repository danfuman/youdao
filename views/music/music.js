/**
 * Created by hxsd on 2016/8/24.
 */
myapp.controller("musicCtrl",function($scope,$http) {
    var url = "json/music.json";
    $http.get(url).success(function (data) {
        $scope.products = data;
    }).finally(function () {
        $scope.$broadcast("scroll.refreshComplete");
    });
    $scope.data={
        showDelete:false,
        showReorder:false
    };
    $scope.loadMore=function(){
        $http.get(url).success(function(data){
            Array.prototype.push.apply($scope.products,data);
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    };
});