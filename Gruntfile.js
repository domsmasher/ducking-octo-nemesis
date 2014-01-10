'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    src: {
      scripts: ['public/src/js/**/*.js'],
      styles: ['public/src/css/**/*.css'],
      specs: ['test/**/*.spec.js'],
      stylus: ['stylus/*.styl']
    },
    stylus: {
      compile: {
        options: {
          compress: false,
          paths: ['path/to/import', 'another/to/import'],
          linenos: false,
          urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
          use: [ require('nib') ],
          import: [ 'nib' ]
        },
        files: {
          'public/src/css/base.css': 'stylus/base.styl'
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
      options: {
        livereload: true
      },
      stylus: {
        files: '<%= src.stylus %>',
        tasks: ['stylus']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');


  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
