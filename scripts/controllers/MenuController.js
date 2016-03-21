// En el módulo moviedg, defino el controlador
angular
.module("moviedb")
.controller("MenuController",
    ["$scope", function($scope){

        // Scope init
        $scope.model = {
            selectedItem: "movies"
        };

        // Scope methods
        $scope.setSelectedItem = function(item){
            $scope.model.selectedItem = item;
        }

        $scope.getClassForItem = function(item){
            if($scope.model.selectedItem == item){
                return "active";
            } else {
                return "";
            }
        }

        // Scope watchers
        $scope.$watch("model.selectedItem", function(newValue, oldValue){
            // Emitimos evento hacia arriba con objetivo AppController
            $scope.$emit("OnMenuChange", newValue);
        });
    }]
);