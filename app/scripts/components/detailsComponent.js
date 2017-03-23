/**
 * Created by rob on 3/23/2017.
 */
detailControllerComp.$inject = ['localStorageService','$scope'];

function detailControllerComp(localStorageService, $scope) {


    this.$onInit = function () {
        //deep copy NEEDED  because angular looses the model on refresh after initial binding
        this.detailResults = angular.copy(this.detailResults);

    };


    // $scope.$on('searchResultsBroadcast', (data) => {
    //     this.searchResults = localStorageService.get('searchResults');
    //     console.log('data', data);
    //     console.log('searchResultsBroadcast this.searchResults', this.searchResults);
    // });

}



angular.module('eutilsUI')
    .component('detailComponent', {
        bindings:{
            detailResults: '<'
        },
        controller: detailControllerComp,
        templateUrl: 'views/info.html'

    });
