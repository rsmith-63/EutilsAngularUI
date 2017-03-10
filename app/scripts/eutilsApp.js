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
                        templateUrl: 'views/main.html',
                        controller: 'searchController',
                        resolve: {

                            dataBases: ["NcbiResources", function (NcbiResources) {
                                return NcbiResources.getDbList().$promise.catch(() => []);
                            }]
                        }

                    }

                }
            })
            .state('app.results', {
                url:'results',
                views: {
                    'content@': {
                        templateUrl : 'views/Results.html',
                        controller  : 'resultsController',
                        resolve: {

                            searchResults: ["localStorageService", function (localStorageService) {
                                return localStorageService.get('searchResults')
                            }]
                        }
                    }
                }
            })
            .state('app.listDetails', {
                url:'^listDetails',
                params: {
                    term: null,
                    db:null
                },
                views: {
                    'content@': {
                        templateUrl : 'views/info.html',
                        controller  : 'detailsController',
                        resolve: {

                            detailResults: ["$stateParams", function ($stateParams) {
                                return $stateParams;
                            }]
                        }
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    })
    .config(function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('eutilsUI')
            .setNotify(false, false);

    });
