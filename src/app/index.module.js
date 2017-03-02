import angular from 'angular';
import phoneList from './phone-list/phone-list.module';

// 模板由 gulp-angular-templatecache 自动生成
import templates from './templates.module';

angular.module('phonecatApp', [
    templates.name,
    phoneList.name
]);

