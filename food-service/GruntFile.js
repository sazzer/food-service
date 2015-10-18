module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
    });
    require('time-grunt')(grunt);

    grunt.initConfig({
        execute: {
            server: {
                src: "src/main/index.js"
            }
        }
    });

    grunt.registerTask('build', []);
    grunt.registerTask('doc', []);
    grunt.registerTask('test', []);
    grunt.registerTask('start', ['build', 'execute:server']);

    grunt.registerTask('default', ['build', 'doc', 'test']);
};
