module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
    });
    require('time-grunt')(grunt);

    grunt.initConfig({
    });

    grunt.registerTask('build', []);
    grunt.registerTask('test', ['build']);

    grunt.registerTask('default', ['test']);
};
