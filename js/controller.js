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
    $scope.quest = "test";
    alert(localStorageService.get("nick"));
});
