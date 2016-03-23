angular.module('moviedb').controller('MovieListController',
    ['$scope', "$log", "MovieService", "URL", "paths", function($scope, $log, MovieService, URL, paths){

        // Scope model init
        $scope.model = [];
        $scope.uiState = 'loading';

        // Scope methods
        $scope.getMovieDetailURL = function(movie) {
            return URL.resolve(paths.movieDetail, {id: movie.id});
        };

        // Controller start
        MovieService.getMovies().then(
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