module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            libs: {
                files: [
                    { expand: true, cwd: 'src/js/lib/', src: ['*.js'], dest: 'www/js', filter: 'isFile' }
                ],
            },
            QuestetraLib: {
                files: [
                    { expand: true, cwd: 'QuestetraLib/', src: ['*.js'], dest: 'src/js', filter: 'isFile' }
                ],
            },
            sandbox: {
                files: [
                    {
                        expand: true,
                        cwd: 'www/',
                        src: ['index.html'],
                        dest: 'www/',
                        rename: function(dest, src) {
                            return dest + 'sandbox.html';
                        },
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'www/',
                        src: ['index.html'],
                        dest: 'www/',
                        rename: function(dest, src) {
                            return dest + 'ChromeAppLogin.html';
                        },
                        filter: 'isFile'
                    }
                ],
            },
        },
        babel: {
            options: {
                plugins: ['transform-react-jsx'], // npm install babel-plugin-transform-react-jsx
                presets: ['es2015', 'react'] // npm install babel-preset-es2015 babel-preset-react
            },
            app: {
                files: [
                    { 'src/js/View_AppEntry.js': 'src/js/jsx/AppEntry.jsx' },
                    { 'src/js/View_LoginForm.js': 'src/js/jsx/LoginForm.jsx' },
                    { 'src/js/View_SmartQApp.js': 'src/js/jsx/SmartQApp.jsx' },
                ]
            }
        },
        browserify: {
            app: {
                files: {
                    'www/js/app.js': ['src/js/View_AppEntry.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('App', ['copy', 'babel', 'browserify:app']);
};
