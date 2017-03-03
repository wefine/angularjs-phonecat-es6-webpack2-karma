import angular from "angular";
import phoneList from "./phone-list/phone-list.module";
import phoneDetail from "./phone-detail/phone-detail.module";
// 模板由 gulp-angular-templatecache 自动生成
import templates from "./templates.module";
import "./index.scss";

angular
    .module('phonecatApp', [
        'ngRoute',
        templates.name,
        phoneList.name,
        phoneDetail.name
    ])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/phones', {
                template: '<phone-list></phone-list>'
            }).when('/phones/:phoneId', {
                template: '<phone-detail></phone-detail>'
            }).otherwise('/phones');
        }
    ]);