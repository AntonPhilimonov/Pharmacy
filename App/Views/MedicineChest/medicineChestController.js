angular.module('app.controllers').controller('MedicineChestController', [
    '$scope',
    function SetCaption($scope) {
        $scope.WidgetCaption = 'Аптечка путешественника';
    }
]);

function MedicineChestCategorySelectCaption($scope) {
    $scope.WidgetCaption = 'Аптечка путешественника';
}
