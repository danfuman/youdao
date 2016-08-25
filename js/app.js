/**
 * Created by hxsd on 2016/8/4.
 */
var myapp=angular.module("myapp",["ionic"]);

myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');


    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    //全部栏目
    $stateProvider.state("tabs.columns",{
        url:"/columns",
        views:{"tab-dictionary":{templateUrl:"views/columns/columns.html"}}
    });
    //练口语
    $stateProvider.state("tabs.spoken",{
        url:"/spoken",
        views:{"tab-dictionary":{templateUrl:"views/spoken/spoken.html",controller:"spokenCtrl"}}
    });
    //听英乐
    $stateProvider.state("tabs.music",{
        url:"/music",
        views:{"tab-dictionary":{templateUrl:"views/music/music.html",controller:"musicCtrl"}}
    });
    //看视频
    $stateProvider.state("tabs.video",{
        url:"/video",
        views:{"tab-dictionary":{templateUrl:"views/video/video.html",controller:"videoCtrl"}}
    });
    //词典
    $stateProvider.state("tabs.dictionary",{
        url:"/dictionary",
        views:{"tab-dictionary":{
            templateUrl:"views/dictionary/dictionary.html"
            //controller:"myCtrl"
        }}
    });
    //百科
    $stateProvider.state("tabs.encyclopedia",{
        url:"/encyclopedia",
        views:{"tab-encyclopedia":{templateUrl:"views/encyclopedia/encyclopedia.html"}}
    });
    //翻译
    $stateProvider.state("tabs.translation",{
        url:"/translation",
        views:{"tab-translation":{templateUrl:"views/translation/translation.html"}}
    });
    //发现
    $stateProvider.state("tabs.found",{
        url:"/found",
        views:{"tab-found":{templateUrl:"views/found/found.html"}}
    });
    //我的
    $stateProvider.state("tabs.my",{
        url:"/my",
        views:{"tab-my":{templateUrl:"views/my/my.html"}}
    });
    $stateProvider.state("tabs.login",{
        url:"/login",
        views:{"tab-my":{templateUrl:"views/login/login.html"}}
    });
    $stateProvider.state("tabs.setup",{
        url:"/setup",
        views:{"tab-my":{templateUrl:"views/setup/setup.html"}}
    });

    $urlRouterProvider.otherwise("/tabs/dictionary")
});