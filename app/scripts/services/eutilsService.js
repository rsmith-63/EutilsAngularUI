/**
 * Created by rob on 2/17/2017.
 */
'use strict';

angular.module('eutilsUI')
.service('queryResults',['$resource', 'baseURL', function($resource, baseURL) {
    this.getQueryResults = function(term){
        return $resource(`${baseURL}/query?${term}`);
    };

}]).factory('NcbiResources',['$resource','baseURL', function ($resource,baseURL) {
    let NcbiResources = $resource(`${baseURL}`, {
    }, {
        getDbList: {
            method: "GET",
            url: `${baseURL}/dblist`,
            isArray: true,
        },


    });
    return NcbiResources;
}]);