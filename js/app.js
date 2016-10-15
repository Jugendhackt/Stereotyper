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
        templateUrl: "template/question.html"
    }

    var match = {
        name: 'match',
        url: '/match',
        templateUrl: "template/match.html"
    }

    var result = {
        name: 'result',
        url: '/result',
        templateUrl: "template/result.html"
    }

    var information = {
        name: 'information',
        url: '/information',
        templateUrl: 'template/information.html'
    }

    var newquestion = {
        name: 'newquestion',
        url: '/newquestion',
        templateUrl: 'template/newquestion.html'
    }

    var danke = {
        name: 'danke',
        url: '/danke',
        templateUrl: 'template/danke.html'
    }


    $stateProvider.state(login);
    $stateProvider.state(result);
    $stateProvider.state(goQuestion);
    $stateProvider.state(match);
    $stateProvider.state(information);
    $stateProvider.state(newquestion);
    $stateProvider.state(danke);
    $locationProvider.html5Mode(true);
});
