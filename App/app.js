angular.module('app.filters', []);
angular.module('app.directives', []);
angular.module('app.services', []);
angular.module('app.controllers', []);

angular.module('app', [
    'app.services',
    'app.controllers',
    'ngRoute'])
    .config(['$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(false);
            $routeProvider
                .when('/drugSearch', {
                    templateUrl: 'App/Views/DrugSearch/drugSearchView.html'
                })
                .when('/map', {
                    templateUrl: 'App/Views/Map/mapView.html'
                }).when('/MedicineChestCategorySelect', {
                    templateUrl: 'App/Views/MedicineChest/MedicineChestCategorySelectView.html'
                }).when('/MedicineChestAdultChest', {
                    templateUrl: 'App/Views/MedicineChest/MedicineChestAdultChestView.html'
                }).when('/MedicineChestChildChest', {
                    templateUrl: 'App/Views/MedicineChest/MedicineChestChildChestView.html'
                }).when('/Phrasebook', {
                    templateUrl: 'App/Views/Phrasebook/PhrasebookView.html'
                })
                .otherwise({ redirectTo: '/drugSearch' });
        }]);
