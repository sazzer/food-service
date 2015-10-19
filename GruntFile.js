var path = require('path');

var projects = [
    'food-service'
].map(function(p) {
    return path.join(p, 'GruntFile.js');
});

module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
        mochacov: 'grunt-mocha-cov'
    });
    require('time-grunt')(grunt);

    grunt.initConfig({
        hub: {
            build: {
                src: projects, 
                tasks: ['build']
            },
            test: {
                src: projects, 
                tasks: ['test']
            }
        }
    });

    grunt.registerTask('build', ['hub:build']);
    grunt.registerTask('test', ['hub:test']);

    grunt.registerTask('default', ['build', 'test']);
};
