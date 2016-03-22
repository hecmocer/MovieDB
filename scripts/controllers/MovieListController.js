angular.module('moviedb').controller('MovieListController',
    ['$scope', "$log", "MovieService", function($scope, $log, MovieService){

        // Scope model init
        $scope.model = [];
        $scope.uiState = 'loading';

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