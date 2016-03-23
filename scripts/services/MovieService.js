angular.module("moviedb").service("MovieService",
    ['$http', '$q', "apiPaths", "URL" , function($http, $q, apiPaths, URL){

        this.apiRequest = function(url){
            // Crear el objeto diferido
            var deferred = $q.defer();

            // Hacer trabajo asíncrono
            $http.get(url).then(
                // Petición OK
                function(response){
                    // Resolver la promesa
                    deferred.resolve(response.data);
                },
                // Petición KO
                function(response){
                    // Rechazar la promesa
                    deferred.reject(response.data);
                });

            // Devolver la promesa
            return deferred.promise;
        }

        this.getMovies = function(){
            return this.apiRequest(apiPaths.movies);
        };

        this.getMovie = function(movieId){
            var url = URL.resolve(apiPaths.movieDetail, { id: movieId});
            return this.apiRequest(url);
        }
    }]
    );