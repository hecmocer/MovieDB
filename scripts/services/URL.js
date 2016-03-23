// Creamos un modulo para añadirle el servicio URL encima
angular.module("URL", []).service("URL", ["$log", function($log){


    /*
    Ejemplo de uso
    URL.resolve('movies/:id/actors/:actors', {
        id: 3,
        actors: aaaaa
    })
    */
    this.resolve = function(url, params){

        var finalURL = [];
        var urlParts = url.split("/");
        for (var i in urlParts){
            var urlPart = urlParts[i];
            if(urlPart.substr(0, 1) == ":"){
                var paramName = urlPart.substr(1);
                var paramValue = params[paramName] || null;
                if(paramValue == null) {
                    $log.error("URL.resolve error: ", paramName, " not found in params dictionary. Check your 'params' value bro");
                    return;
                }
                finalURL.push(paramValue);
            } else {
                finalURL.push(urlPart);
            }
        }
        return finalURL.join("/");
    };

}])