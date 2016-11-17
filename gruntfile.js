// 'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                options: {    // Target options
                    style: 'expanded',
                },
                files: {
					'market2/market2.the-adult-company.com/market/banners/cam4/template_01/dest/styles/style.css': 'market2/market2.the-adult-company.com/market/banners/cam4/template_01/src/styles/style.sass',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_02/dest/styles/style.css': 'market2/market2.the-adult-company.com/market/banners/cam4/template_02/src/styles/style.sass',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_03/dest/styles/style.css': 'market2/market2.the-adult-company.com/market/banners/cam4/template_03/src/styles/style.sass',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_04/dest/styles/style.css': 'market2/market2.the-adult-company.com/market/banners/cam4/template_04/src/styles/style.sass'
                }
            }
        },
        coffee: {
            compile: {
                files: {
					'market2/market2.the-adult-company.com/market/banners/cam4/template_01/dest/scripts/scripts.js': 'market2/market2.the-adult-company.com/market/banners/cam4/template_01/src/scripts/app.coffee'
                }
            }
        },
        watch: {
            watch_sass_files: {
                files: [
					'market2/market2.the-adult-company.com/market/banners/cam4/template_01/dest/styles/style.css',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_02/dest/styles/style.css',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_03/dest/styles/style.css',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_04/dest/styles/style.css',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_01/src/styles/*.sass',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_02/src/styles/*.sass',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_03/src/styles/*.sass',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_04/src/styles/*.sass',
				],
                tasks: ['sass']
            },
            autoprefix: {
                files: [
					'market2/market2.the-adult-company.com/market/banners/cam4/template_01/dest/styles/style.css',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_02/dest/styles/style.css',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_03/dest/styles/style.css',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_04/dest/styles/style.css',
				],
                tasks: ['autoprefixer']
            },
            watch_coffee: {
                files: [
					'market2/market2.the-adult-company.com/market/banners/cam4/template_01/dest/scripts/scripts.js',
					'market2/market2.the-adult-company.com/market/banners/cam4/template_01/**/*.coffee'
				],
                tasks: ['coffee']
            }
        },
        autoprefixer: {
            options: {
              // Task-specific options go here. 
              browsers: ['last 10 versions', 'ie 8', 'ie 9', '> 1%']
            },
            dist: {
                src: 'market2/market2.the-adult-company.com/market/banners/cam4/**/*.css'
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },
            // when this task is run, lint the Gruntfile and all js files in src
            build: ['gruntfile.js', 'market2/market2.the-adult-company.com/market/banners/cam4/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.registerTask('default', [ 'coffee', 'sass', 'jshint',  'autoprefixer']);
    grunt.registerTask('watch_sass_files', ['watch']);
    grunt.registerTask('autoprefix', ['watch']);
    grunt.registerTask('watch_coffee', ['watch']);
};
