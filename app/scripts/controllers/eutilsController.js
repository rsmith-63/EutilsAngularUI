/**
 * Created by rob on 2/17/2017.
 */
'use strict';

angular.module('eutilsUI').controller('searchController', ['$scope', 'dataBases', 'queryResults'
    , '$state',
    'localStorageService', '$rootScope', function ($scope, dataBases, queryResults, $state, localStorageService, $rootScope) {

        dataBases.unshift("All DataBases");
        $scope.dataBases = dataBases;
        $scope.slectedDB = dataBases[0];


        $scope.searchDb = function (txt, slectedDB) {

            queryResults.getQueryResults(txt, slectedDB).get(function (response) {
                    localStorageService.set('searchResults', response);

                    $state.go('app.results');

                    $rootScope.$broadcast('searchResultsBroadcast', {'updated': true})
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                });

            $scope.searchTxt = '';

        };

    }])
    .controller('resultsController', ['$scope', 'searchResults', 'localStorageService', function ($scope, searchResults, localStorageService) {
        $scope.searchResults = searchResults;
        console.log('resultsController searchResults', searchResults);

        $scope.$on('searchResultsBroadcast', (data) => {
            $scope.searchResults = localStorageService.get('searchResults');
            console.log('data', data);
            console.log('searchResultsBroadcast $scope.searchResults', $scope.searchResults);
        });
    }]);
