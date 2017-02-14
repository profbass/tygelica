'use strict';
 
module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        watch: {
            styles:{
                files: "src/less/**/*.less",
                tasks: ["less"]
            },
            scripts: {
                files: 'src/js/**/*.js',
                tasks: ['uglify']
            },
        },
        less: {
            tygelica: {
                options: { 
                    paths: ["public/css/"], // Specifies directories to scan for @import directives when parsing.
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // compilation.css  :  source.less
                    "public/css/app.min.css": "src/less/app.less"
                }
            },
        },
        uglify:{
             tygelica: {
                files: {
                  'public/js/app.min.js': ['src/js/app.js','src/js/libs/parallax.js']
                },
                options: {
                  mangle: false
                }
            }
        },
    });
     grunt.registerTask('default', ['less','uglify','watch']);
};