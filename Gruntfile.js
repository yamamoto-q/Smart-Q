
module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            libs: {
                files: [
                    { expand: true, cwd: 'src/js/lib/', src: ['*.js'], dest: 'www/js', filter: 'isFile' }
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
                    {'src/js/View_AppEntry.js': 'src/js/jsx/AppEntry.jsx'},
                    {'src/js/View_LoginForm.js': 'src/js/jsx/LoginForm.jsx'},
                    {'src/js/View_SmartQApp.js': 'src/js/jsx/SmartQApp.jsx'},
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
    grunt.registerTask('App', ['copy:libs','babel','browserify:app']);
};