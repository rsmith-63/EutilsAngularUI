/**
 * Created by rob on 2/17/2017.
 */
'use strict';

angular.module('eutilsUI').controller('searchController', ['$scope', 'dataBases', 'queryResults' ,'$state', function($scope, dataBases, queryResults,$state) {

    dataBases.unshift("All DataBases");
    $scope.dataBases = dataBases;
    $scope.slectedDB = dataBases[0];


    $scope.searchDb = function(txt,slectedDB) {

        queryResults.getQueryResults(txt,slectedDB).query(function(response){
                console.log(response);
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            });

         $scope.searchTxt = '';
         $state.go('app.results');
    };

}])
    .controller('resultsController', ['$scope', function ($scope) {
          console.log('resultsController', $scope);
    }]);
