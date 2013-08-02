module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        'closure-compiler': {
            frontend: {
              closurePath: 'bin',
              js: 'js/test.js',
              jsOutputFile: 'js/test.google.js',
              maxBuffer: 500,
              options: {
                compilation_level: 'ADVANCED_OPTIMIZATIONS'/*,
                language_in: 'ECMASCRIPT5_STRICT'*/
              }
            }
        },
        uglify: {
            build : {
                src : 'js/test.js',
                dest : 'js/test.uglify.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-closure-compiler');
    
    grunt.registerTask('default', ['uglify', 'closure-compiler']);
}; 