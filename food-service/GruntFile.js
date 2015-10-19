var pkg = require('./package');

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
                command: 'docker build -t foodplan/food-service:latest -t foodplan/food-service:' + pkg.version + ' .',
                options: {
                    stdout: true,
                    stderr: false,
                    execOptions: {
                        maxBuffer: 1024 * 1024
                    }
                }
            }
        },
        eslint: {
            options: {
                configFile: "eslintrc"
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/main',
                    src: ["**/*.js"]
                }]
            },
            test: {
                options: {
                    envs: ["mocha"]
                },
                files: [{
                    expand: true,
                    cwd: 'src/test',
                    src: ["**/*.js"]
                }]
            },
        },
        watch: {
            server: {
                files: [
                    'package.json',
                    'GruntFile.js',
                    'src/**/*'
                ],
                tasks: ['default'],
                options: {
                    spawn: true,
                    interrupt: true,
                    atBegin: true
                }
            }
        }
    });

    grunt.registerTask('lint', ['eslint:main', 'eslint:test']);

    grunt.registerTask('build', ['lint']);
    grunt.registerTask('test', ['build', 'mochacov:server']);
    grunt.registerTask('start', ['build', 'execute:server']);

    grunt.registerTask('default', ['build', 'test']);
};
