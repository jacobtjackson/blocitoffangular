(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/home.html'
            })
            .state('active', {
                url: '/',
                controller: 'TaskCtrl as task',
                templateUrl: '/templates/active.html'
            })
            .state('completed', {
                url: '/',
                templateUrl: '/templates/completed.html'
            })
            .state('newTask', {
                url: '/',
                controller: 'TaskCtrl as task',
                templateUrl: '/templates/newTask.html'
            });
            
    }

    angular
        .module('blocitoff', ['firebase', 'ui.router'])
        .config(config);
})();