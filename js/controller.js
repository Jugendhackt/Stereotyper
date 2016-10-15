myApp.controller("LoginController", function ($scope, localStorageService) {
  $scope.login = function () {
      if(localStorageService.isSupported) {
        localStorageService.set("nick", $scope.nick);
      } else {
        alert("Dieser Browser wird leider nicht untersützt. Bitte wechseln Sie das Model auf was cooles neues ;-)");
      }
  }
});

myApp.controller("QuestionsController", function ($scope, localStorageService, $state) {
    var index = [];
    var questions = ["Magst du Flüchtlinge?",
        "Hast du ein Problem mit gleichgeschlechtlicher Ehe?",
        "Hast du das Gefühl, dass Deutschland immer mehr islamisiert?",
        "Denkst du, dass die Flüchtlinge uns die Arbeitsplätze wegnehmen?",
        "Die Ausländer haben kein Interesse sich anzupassen.",
        "Würdest du dir Zeit nehmen Flüchtlingsheime zu bauen?",
        "Schwarze Menschen sind krimineller.",
        "Frauen können kein Auto fahren.",
        "Frauen haben keine handwerklichen Fähigkeiten.",
        "Frauen können keine Landkarten lesen.",
        "Frauen können rechts von links nicht unterscheiden.",
        "Männer denken immer nur an das eine.",
        "Bist du der Meinung, dass Frauen weniger Geld bekommen sollten?",
        "Ausländer liegen uns auf der Tasche.",
        "Findest du, dass Frauen immer  fett sind?",
        "Russen trinken immer Vodka.",
        "Asiaten schreiben immer gute Noten und sind fleißig.",
        "Bist du offen für Verbesserungen im Bereich Flüchtlinge?",
        "Zuwanderer gefährden unseren Sozialstaat.",
        "AIDS haben wir den Homosexullen zu verdanken.",
        "Männer sind einfach wehleidiger als Frauen.",
        "Ausländer nehmen uns die Arbeitsplätze weg.",
        "Flüchtlinge kommen nur hierher, um sich ein schönes Leben von unserem Geld zu machen.",
        "Blondinen sind doof.",
        "Alle Polen klauen.",
        "Muslime sind Terroristen.",
        "Ausländer sind besonders kriminell.",
        "Türken sind aggressiv.",
        "Türken sind ungebildet."];

    var question = questions[Math.floor(Math.random()*questions.length)];

     $scope.quest = question;
     $scope.pager = 1;
     var result = [];

     $scope.yes = function () {
       result = {question:"yes"};
       next();
     }

     $scope.skip = function () {
       result = {question:"skip"};
       next();
     }

     $scope.no = function () {
       result = {question:"no"};
       next();
     }

     function next() {
       index.push(question);
       var newitem = questions[Math.floor(Math.random()*questions.length)];
       while (index.indexOf(newitem) != -1) {
         console.log(index.indexOf(newitem));
         var newitem = questions[Math.floor(Math.random()*questions.length)];
       };
       $scope.quest = newitem;
       $scope.pager++;

       if($scope.pager == 10) {
         $state.go("result");
       }
     }
  });
