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
                url: '/',
                views: {

                    'header': {
                        templateUrl: 'views/SearchForm.html',
                        controller: 'searchController',
                        resolve: {

                            dataBases: ["NcbiResources", function (NcbiResources) {
                                return NcbiResources.getDbList().$promise.catch(() => []);
                            }]
                        }

                    },
                    'content': {
                        templateUrl: 'views/info.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
