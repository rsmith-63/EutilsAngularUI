/**
 * Created by rob on 3/9/2017.
 */

resultsControllerComp.$inject = ['localStorageService','$scope'];

function resultsControllerComp(localStorageService, $scope) {


    this.$onInit = function () {
        //deep copy NEEDED  because angular looses the model on refresh after initial binding
        this.searchResults = angular.copy(this.searchResults);

    };


    $scope.$on('searchResultsBroadcast', (data) => {
        this.searchResults = localStorageService.get('searchResults');
        console.log('data', data);
        console.log('searchResultsBroadcast this.searchResults', this.searchResults);
    });

}



angular.module('eutilsUI')
    .component('resultsComponent', {
        bindings:{
            searchResults: '<'
        },
        controller: resultsControllerComp,
        templateUrl: 'views/ResultsComp.html'

    });
