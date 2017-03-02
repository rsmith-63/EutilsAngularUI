/**
 * Created by rob on 2/16/2017.
 */
'use strict';
angular.module('eutilsUI', ['ui.router', 'ngResource' ,'LocalStorageModule'])
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
            })
            .state('app.results', {
                url:'results',
                views: {
                    'content@': {
                        templateUrl : 'views/Results.html',
                        controller  : 'resultsController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    })
    .config(function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('eutilsUI');

    });
