module.exports = function(grunt) {

  var path = {
    js: ['../vendor/**/*.js'],
    css: ['../vendor/**/*.css']
  }

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: path.js,
        dest: 'dist/js/all.js'
      }
    },

    uglify: {
      build: {
        files: {
          'dist/js/all.min.js': path.js
        }
      }
    },

    cssmin: {
      build: {
        src: path.css,
        dest: 'dist/css/all.min.css'
      }
    },

    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: '../images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/images/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('bench-concat', ['concat']);
  grunt.registerTask('bench-uglify', ['uglify']);
  grunt.registerTask('bench-cssmin', ['cssmin']);
  grunt.registerTask('bench-imagemin', ['imagemin']);
  grunt.registerTask('default', ['bench-concat', 'bench-uglify', 'bench-cssmin', 'bench-imagemin']);
};
