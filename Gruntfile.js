module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          trace: true,
          sourcemap: 'auto',
          loadPath: 'assets/sass',
          style: 'compressed',
          noCache: true
        },
        files: {
          'assets/app.css': 'assets/sass/app.scss',
        }
      }
    },
    concat: {
      js: {
        files: {
          'assets/app.js': [
            'assets/js/respond.min.js',
            'assets/js/fittext.js',
            'assets/js/highlight.pack.js',
            'assets/js/index.js'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['concat:js'],
        options: {
          spawn: false,
        },
      },
      sass: {
        files: ['assets/sass/**/*'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.registerTask('default', ['sass', 'concat']);

};
