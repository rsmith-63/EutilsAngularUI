/**
 * Created by rob on 3/9/2017.
 */

angular.module('eutilsUI')
    .component('searchComp', {
        templateUrl: 'views/SearchFormComp.html',
        controller: 'searchController',
        bindings:{
            dataBases: '<'
        }
    });
