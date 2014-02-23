module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['public_html'],
    jade: {
      compile: {
        files: {
          'public_html/index.html' : 'views/index.jade'
        }
      }
    },
    less: {
      production: {
        options: {
          cleancss: true
        },
        files: {
          'public_html/stylesheets/style.css' : 'assets/stylesheets/style.less'
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'assets/images/**',
            dest: 'public_html/images/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: 'assets/files/**',
            dest: 'public_html',
            filter: 'isFile'
          },
          {
            expand: true,
            src: 'bower_components/**',
            dest: 'public_html'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'jade', 'less', 'copy']);
};

