/**
 * Created by rob on 3/9/2017.
 */

searchControllerComp.$inject = ['queryResults','$state', 'localStorageService','$rootScope'];

function searchControllerComp (queryResults, $state, localStorageService, $rootScope) {


    this.$onInit= function(){
        this.databases.unshift("All DataBases");
        //deep copy NEEDED  because angular looses the model on refresh after initial binding
        this.databases = angular.copy(this.databases);
        this.selectedDB = this.databases[0];

    };


    this.searchDb = function (txt, selectedDB) {

        queryResults.getQueryResults(txt, selectedDB).get(function (response) {
                localStorageService.set('searchResults', response);

                $state.go('app.results');

                $rootScope.$broadcast('searchResultsBroadcast', {'updated': true})
            },
            function (response) {
                this.message = `Error:  ${response.status}   ${response.statusText}`;
            });

        this.searchTxt = '';

    };


}
angular.module('eutilsUI')
    .component('search', {
        bindings:{
            databases: '<'
        },
        controller: searchControllerComp,
        templateUrl: 'views/SearchFormComp.html'

    });
