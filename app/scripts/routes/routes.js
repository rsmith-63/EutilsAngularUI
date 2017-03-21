angular.module('eutilsUI')
    .config(RoutesConfig);
RoutesConfig.$inject = ['$stateProvider' ];
function RoutesConfig($stateProvider) { //$urlServiceProvider

    $stateProvider.state('search', {
        url: '/',
        views: {
            'header': {

                component: 'search',
                bindings: {
                    databases: 'databases'
                }

            },
            'content': {
                component: 'infoComp'
            }
        },
        resolve: {

            databases: ["NcbiResources", function (NcbiResources) {
                return NcbiResources.getDbList().$promise.catch(() => []);
            }]
        }
    });

    $stateProvider.state('app.results', {
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
    });

    $stateProvider.state('app.listDetails', {
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

}




