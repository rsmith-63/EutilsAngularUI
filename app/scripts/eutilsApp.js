/**
 * Created by rob on 2/16/2017.
 */
'use strict';
angular.module('eutilsUI', ['ui.router', 'ngResource' ,'LocalStorageModule'])
    .constant("baseURL","http://localhost:4000/api")
    .config(function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('eutilsUI')
            .setNotify(false, false);

    });
