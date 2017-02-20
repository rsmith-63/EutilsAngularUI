/**
 * Created by rob on 2/17/2017.
 */
'use strict';

angular.module('eutilsUI').controller('searchController', ['$scope', 'searchNcbi', function($scope, searchNcbi) {

    searchNcbi.getDataBases().query(function(response){
            $scope.dataBases = response;
        },
        function(response){
            $scope.message = "Error: "+response.status + " " + response.statusText;
        });
}]);
