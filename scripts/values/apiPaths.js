angular.module("moviedb").value("apiPaths", {
    movies: "/api/movies",
    movieDetail: "/api/movies/:id"
});

// Se pueden cambiar las rutas de la API unicamente en este archivo