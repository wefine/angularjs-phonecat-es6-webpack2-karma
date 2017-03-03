import angular from "angular";
import {checkmarkFilter} from "./checkmark/checkmark.filter";

export default angular
    .module('phonecatApp.core', [])
    .filter('checkmark', checkmarkFilter);
