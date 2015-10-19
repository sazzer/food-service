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
        },
        shell: {
            dockerBuild: {
                command: 'docker build -t foodplan/food-service:latest -t foodplan/food-service:0.0.1 .',
                options: {
                    stdout: true,
                    stderr: false,
                    execOptions: {
                        maxBuffer: 1024 * 1024
                    }
                }
            }
        }
    });

    grunt.registerTask('build', []);
    grunt.registerTask('doc', []);
    grunt.registerTask('test', ['build', 'mochacov:server']);
    grunt.registerTask('start', ['build', 'execute:server']);

    grunt.registerTask('default', ['build', 'doc', 'test']);
};
