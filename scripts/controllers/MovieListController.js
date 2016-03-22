angular.module('moviedb').controller('MovieListController',
    ['$scope', "$log", "MovieService", function($scope, $log, MovieService){

        // Scope model init
        $scope.model = [];
        $scope.uiState = 'loading';

        // Controller start
        MovieService.getMovies().then(
            // Promesa resuelta
            function(response){
                $scope.model = response.data;
                if($scope.model.length == 0){
                    $scope.uiState = 'blank';
                } else {
                    $scope.uiState = 'ideal';
                }
            },
            // Promesa rechazada
            function(response){
                $log.error('Error', response);
                $scope.uiState = 'error';
            }
        );

    }]
);