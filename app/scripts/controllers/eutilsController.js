/**
 * Created by rob on 2/17/2017.
 */
'use strict';

angular.module('eutilsUI').controller('searchController', ['$scope', 'dataBases', 'queryResults' ,'$state',
    'localStorageService', function($scope, dataBases, queryResults,$state,localStorageService) {

    dataBases.unshift("All DataBases");
    $scope.dataBases = dataBases;
    $scope.slectedDB = dataBases[0];


    $scope.searchDb = function(txt,slectedDB) {

        queryResults.getQueryResults(txt,slectedDB).query(function(response){
                localStorageService.set('eutilsUI',response);
                $state.go('app.results');
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            });

         $scope.searchTxt = '';

    };

}])
    .controller('resultsController', ['$scope','searchResults', function ($scope,searchResults) {
          console.log('resultsController', $scope);
        console.log('resultsController searchResults', searchResults);
    }]);
