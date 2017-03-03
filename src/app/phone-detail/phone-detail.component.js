
export const phoneDetailComponent = {
    template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    controller: ['$routeParams',
        function ($routeParams) {
            this.phoneId = $routeParams.phoneId;
        }
    ]
};