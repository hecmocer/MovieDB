angular.module('moviedb').controller('MovieListController',
    ['$scope', "$log", "APIClient", "URL", "paths", function($scope, $log, APIClient, URL, paths){

        // Scope model init
        $scope.model = [];
        $scope.uiState = 'loading';

        // Scope methods
        $scope.getMovieDetailURL = function(movie) {
            return URL.resolve(paths.movieDetail, {id: movie.id});
        };

        // Controller start
        APIClient.getMovies().then(
            // Promesa resuelta
            function(data){
                $scope.model = data;
                if($scope.model.length == 0){
                    $scope.uiState = 'blank';
                } else {
                    $scope.uiState = 'ideal';
                }
            },
            // Promesa rechazada
            function(data){
                $log.error('Error', data);
                $scope.uiState = 'error';
            }
        );

    }]
);