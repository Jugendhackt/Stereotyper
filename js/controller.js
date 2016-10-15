myApp.controller("LoginController", function ($scope, localStorageService) {
  $scope.login = function () {
      if(localStorageService.isSupported) {
        localStorageService.set("nick", $scope.nick);
      } else {
        alert("Dieser Browser wird leider nicht untersützt. Bitte wechseln Sie das Model auf was cooles neues ;-)");
      }
  }
});

myApp.controller("QuestionsController", function ($scope, localStorageService) {
    var index = [];
    var questions = ["Magst du Flüchtlinge?", "Hast du ein Problem mit gleichgeschlechtlicher Ehe?", "Hast du das Gefühl, dass Deutschland immer mehr islamisiert?", "Denkst du, dass die Flüchtlinge uns die Arbeitsplätze wegnehmen?", "Die Ausländer haben kein Interesse sich anzupassen", "Würdest du dir Zeit nehmen Flüchtlingsheime zu bauen?", "Schwarze Menschen sind krimineller.", "Frauen können kein Auto fahren.", "Frauen haben keine handwerklichen Fähigkeiten", "Frauen können keine Landkarten lesen.", "Frauen können rechts von links nicht unterscheiden.", "Männer denken immer nur an das eine.", "Bist du der Meinung dass Frauen weniger Geld bekommen sollen.", "Ausländer liegen uns auf der Tasche", "Findest du das Frauen immer  Fett sind?", "Russen trinken immer Vodka.", "Asiaten schreiben immer gute Noten und sind fleißig.", "Bist du offen für Verbesserungen im Bereich Flüchtlinge?", "Zuwanderer gefährden unseren Sozialstaat"];

    $scope.quest = "test";
    alert(localStorageService.get("nick"));
});
