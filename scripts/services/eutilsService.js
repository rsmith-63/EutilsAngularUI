/**
 * Created by rob on 2/17/2017.
 */
'use strict';

angular.module('eutilsUI')
.service('searchNcbi',['$resource', 'baseURL', function($resource, baseURL) {
    this.getDataBases = function(){
        return $resource(`${baseURL}/dblist`);
    };

}]);