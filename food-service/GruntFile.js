module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
        mochacov: 'grunt-mocha-cov'
    });
    require('time-grunt')(grunt);

    grunt.initConfig({
        execute: {
            server: {
                src: "src/main/index.js"
            }
        },
        mochacov: {
            options: {
                reporter: 'spec'
            },
            server: ['src/test/**/*-spec.js']
        }
    });

    grunt.registerTask('build', []);
    grunt.registerTask('doc', []);
    grunt.registerTask('test', ['build', 'mochacov:server']);
    grunt.registerTask('start', ['build', 'execute:server']);

    grunt.registerTask('default', ['build', 'doc', 'test']);
};
