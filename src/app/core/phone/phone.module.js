import angular from "angular";
import {phoneResource} from "./phone.service";

export default angular
    .module('phonecatApp.core.phone', ['ngResource'])
    .factory('Phone', phoneResource);
