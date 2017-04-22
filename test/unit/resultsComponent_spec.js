/**
 * Created by rob on 4/11/2017.
 */


describe('resultsControllerComp', function () {
    let $componentController;
    let controller;
    let searchResults = {
        "searchTerm": "polio",
        "selectedDB": "All DataBases",
        "totalFound": "26",
        "categories": [
            {
                "category": "Literature",
                "databases": [
                    {
                        "DbName": "books",
                        "MenuName": "Books",
                        "Count": "1723",
                        "Status": "Ok"
                    }
                ]
            }
        ]
    };

    beforeEach(module('eutilsUI'));

    beforeEach(inject(function ($injector) {
        $componentController =  $injector.get('$componentController');
       let  $rootScope = $injector.get('$rootScope');
       let $scope = $rootScope.$new();

        controller =  $componentController('resultsComponent',{$scope:$scope},
        {searchResults:searchResults});



    }));

    describe('searchResults are in the controller',()=>{
        it('search results bound to component', () => {
            controller.$onInit();
            expect(controller.searchResults).toEqual(searchResults);
        });

    });

});
