import angular from "angular";
import {checkmarkFilter} from "./checkmark/checkmark.filter";
import phoneService from "./phone/phone.module";

export default angular
    .module('phonecatApp.core', [
        phoneService.name
    ])
    .filter('checkmark', checkmarkFilter);
