import angular from 'angular';
import phoneList from './phone-list/phone-list.module';

// 模板由 gulp-angular-templatecache 自动生成
import templates from './templates.module';
import './index.scss';

angular.module('phonecatApp', [
    'ui.bootstrap',
    templates.name,
    phoneList.name
]);

