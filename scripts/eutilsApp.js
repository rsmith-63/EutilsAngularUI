/**
 * Created by rob on 2/16/2017.
 */
'use strict';
angular.module('eutilsUI', ['ui.router', 'ngResource'])
    .constant("baseURL","http://localhost:4000/api")
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url:'/',
                views: {

                    'content': {
                        templateUrl : 'views/SearchForm.html',
                        controller  : 'SearchController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
