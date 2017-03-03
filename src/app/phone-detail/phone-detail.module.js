import {phoneDetailComponent} from "./phone-detail.component";
import phoneResource from "../core/phone/phone.module";

export default angular
    .module('phonecatApp.phoneDetail', [
        'ngRoute',
        phoneResource.name
    ])
    .component('phoneDetail', phoneDetailComponent);
