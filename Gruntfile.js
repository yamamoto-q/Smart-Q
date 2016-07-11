
module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            libs: {
                files: [
                    // includes files within path
                    { expand: true, cwd: 'src/js', src: ['AppEntry.js'], dest: 'www/js', filter: 'isFile' },
                ],
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.registerTask('App', ['less','babel','browserify:app','copy:app']);
};