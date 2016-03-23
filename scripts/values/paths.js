angular.module("moviedb").constant("paths", {
    home: "/",
    movies: "/movies",
    movieDetail: "/movies/:id",
    series: "/series",
    people: "/people",
    notFound: "/sorry-404-not-found"
});

// Se pueden cambiar las rutas unicamente en este archivo