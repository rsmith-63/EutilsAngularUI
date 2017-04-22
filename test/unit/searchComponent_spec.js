/**
 * Created by rob on 4/11/2017.
 */


describe('resultsControllerComp', function () {
    let $componentController;
    let controller;
    let databases = [
        "annotinfo",
        "assembly",
        "biocollections",
        "bioproject",
        "biosample",
        "biosystems",
        "blastdbinfo",
        "books"];

    beforeEach(module('eutilsUI'));

    beforeEach(inject(function ($injector) {
        $componentController =  $injector.get('$componentController');
       let  $rootScope = $injector.get('$rootScope');
       let $scope = $rootScope.$new();

        controller =  $componentController('search',{$scope:$scope},
        {databases:databases});



    }));

    describe('databases are in the controller',()=>{
        it('databases bound to component', () => {
            controller.$onInit();
            expect(controller.databases).toEqual(databases);
        });

    });

});
