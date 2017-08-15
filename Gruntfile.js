// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/less/**/*.less',
            tasks: ['less']
        },
        less: {
            dev: {
                options: {
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 10 versions"]})
                    ],
                    compress: true,
                    cleancss: true,
                    sourceMap: true,
                    sourceMapFilename: 'app/css/style.css.map',
                    sourceMapURL: 'style.css.map',
                    sourceMapRootpath: '/'
                },
                files: {
                    'app/css/style.css': 'app/less/style.less'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html',
                        'app/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};