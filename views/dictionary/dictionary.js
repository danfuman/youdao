/**
 * Created by hxsd on 2016/8/4.
 */
var myapp=angular.module("myapp",["ionic"]);
myapp.controller("myCtrl",function($scope,$http,$ionicScrollDelegate){
////            //下拉刷新
////            $scope.refresh=function(){
////                $http.get("data.json").success(function(data){
////                    $scope.products=data;
////                }).finally(function(){
////                    $scope.$broadcast("scroll.refreshComplete");
////                })
////            };
//
//    $scope.loadMore=function(){
//        $http.get("json/dictionary.json").success(function(data){
//            Array.prototype.push.apply($scope.products,data);
//        }).finally(function(){
//            $scope.$broadcast("scroll.infiniteScrollComplete");
//        })
//    };
});