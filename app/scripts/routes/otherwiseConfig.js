/**
 * Created by rob on 3/15/2017.
 */
// const otherwiseConfigBlock = ['$urlRouterProvider', $urlRouterProvider => { $urlRouterProvider.otherwise("/welcome"); }];
angular.module('eutilsUI')
    .config(otherwiseConfigBlock);
otherwiseConfigBlock.$inject = ['$urlServiceProvider' ];
function otherwiseConfigBlock($urlServiceProvider) { //userlist search
    $urlServiceProvider.rules.otherwise({ state: 'app' });

}