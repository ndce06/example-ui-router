var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home/list');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            views: {
                'main@': {
                    templateUrl: 'home.html'
                }
            }
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                'main@': { templateUrl: 'about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'aboutController'
                }
            }
            
        });

});

routerApp.controller('aboutController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.products = [
        {
            name: 'Product 1',
            price: 50
        },
        {
            name: 'Product 2',
            price: 10000
        },
        {
            name: 'Product 3',
            price: 20000
        }
    ];
    
});
