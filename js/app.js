var myApp = angular.module('stereotyper', ['ui.router']);

myApp.config(function($stateProvider, $locationProvider) {
    var login = {
        name: 'login',
        url: '/',
        templateUrl: "template/login.html"
    }

    var goQuestion = {
        name: 'questions',
        url: '/questions',
        template: '<h3>Ja geht</h3>'
    }

    var match = {
        name: 'match',
        url: '/match',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    var result = {
        name: 'result',
        url: '/result',
        template: '<h3>Test 1 2 3</h3>'
    }

    $stateProvider.state(login);
    $stateProvider.state(result);
    $stateProvider.state(goQuestion);
    $stateProvider.state(match);
    $locationProvider.html5Mode(true);
});


