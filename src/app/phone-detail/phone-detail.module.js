import {phoneDetailComponent} from "./phone-detail.component";

export default angular
    .module('phonecatApp.phoneDetail', [
        'ngRoute'
    ])
    .component('phoneDetail', phoneDetailComponent);
