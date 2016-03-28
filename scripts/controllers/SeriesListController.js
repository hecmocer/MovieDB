angular.module("moviedb").controller("SeriesListController",
    ['$scope', "$log", "APIClient", "URL", "paths", function($scope, $log, APIClient, URL, paths){

        // Scope model init
        $scope.model = [];
        $scope.uiState = 'loading';

        // Scope methods
        $scope.getSerieDetailURL = function(serie) {
            return URL.resolve(paths.serieDetail, {id: serie.id});
        };

        // Controller start
        APIClient.getSeries().then(
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