module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        concat: {
            options: {
                separator: '\n;',
                process: false,
                stripBanners: {
                    block: true
                }
            },
            app: {
                src: [
                    // Cargamos los paquetes instalados con bower y el codigo fuente de la aplicacion
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/bootstrap-star-rating/js/star-rating.js',
                    'bower_components/moment/moment.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-sanitize/angular-sanitize.js',
                    'scripts/**/*.js',
                    'scripts/*.js'
                ],
                dest: 'dist/app.js'
            }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            built: {
                files: {
                    'dist/app.min.js': ['dist/app.js']
                }
            }
        },

        less: {
            build: {
                files: {
                    "dist/style.css": "bower_components/bootstrap/less/bootstrap.less",
                }
            }
        },

        watch: {
            js: {
                files: ['scripts/**/*.js', 'scripts/*.js'],
                tasks: ['concat']
            }
        }

    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // default task(s).
    grunt.registerTask('default', ['less', 'concat', 'watch']);
    grunt.registerTask('prod', ['less', 'concat', 'uglify']);

};