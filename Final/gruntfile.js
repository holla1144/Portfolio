  module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/main.js'
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: 'main.css'
        }]
    }
      },

    watch: {
        sass: {
          // We watch and compile sass files as normal but don't live reload here
          files: ['css/*.scss', 'js/src/*.js'],
          tasks: ['sass', 'concat']
        },
      
    } 
   
	});
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch', 'concat']);

};