import {phoneListComponent} from "./phone-list.component";
import phoneResource from "../core/phone/phone.module";

export default angular
    .module('phonecatApp.phoneList', [
        phoneResource.name
    ])
    .component('phoneList', phoneListComponent);
