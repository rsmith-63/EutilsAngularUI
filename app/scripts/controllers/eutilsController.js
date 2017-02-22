/**
 * Created by rob on 2/17/2017.
 */
'use strict';

angular.module('eutilsUI').controller('searchController', ['$scope', 'searchNcbi', 'queryResults', function($scope, searchNcbi,queryResults) {

    searchNcbi.getDataBases().query(function(response){
            response.unshift("All DataBases");
            $scope.dataBases = response;
            $scope.slectedDB = response[0];
        },
        function(response){
            $scope.message = "Error: "+response.status + " " + response.statusText;
        });
    $scope.searchDb = function(txt,slectedDB) {
         console.log(slectedDB);
        queryResults.getQueryResults(txt).query(function(response){
                console.log(response);
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            });

         $scope.searchTxt = '';
    };

}]);
