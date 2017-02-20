/**
 * Created by rob on 2/17/2017.
 */
'use strict';

angular.module('eutilsUI').controller('searchController', ['$scope', 'searchNcbi', 'queryResults', function($scope, searchNcbi,queryResults) {

    searchNcbi.getDataBases().query(function(response){
            response.unshift("All DataBases");
            $scope.dataBases = response;
        },
        function(response){
            $scope.message = "Error: "+response.status + " " + response.statusText;
        });
    $scope.searchDb = function(txt) {
         console.log(txt);
        queryResults.getQueryResults(txt).query(function(response){
                console.log(response);
            },
            function(response){
                $scope.message = "Error: "+response.status + " " + response.statusText;
            });

         $scope.searchTxt = '';
    };

}]);
