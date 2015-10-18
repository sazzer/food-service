module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
    });
    require('time-grunt')(grunt);

    grunt.registerTask('build', []);
    grunt.registerTask('doc', []);
    grunt.registerTask('test', []);

    grunt.registerTask('default', ['build', 'doc', 'test']);
};
