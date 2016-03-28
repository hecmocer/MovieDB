angular.module("moviedb").controller("MovieDetailController",
    ["$scope", "$routeParams", "$location", "APIClient", "paths",
    function($scope, $routeParams, $location, APIClient, paths){

        // Scope init
        $scope.model = {};
        $scope.uiState = 'loading';
        $scope.$emit("ChangeTitle", "Loading...");

        // Controller init
        APIClient.getMovie($routeParams.id).then(
            // Pelicula encontrada
            function(movie){
                $scope.model = movie;
                $scope.uiState = 'ideal';
                // Emitimos evento a app controller para que actualice la cabecera de la página
                $scope.$emit("ChangeTitle", $scope.model.title);
            },
            // Pelicula no encontrada
            function(error){
                $location.url(paths.notFound);
            });
    }]
    );