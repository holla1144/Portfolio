module.exports = function(grunt) {

	grunt.initConfig({
	  sass: {
	    dist: {
	      files: [{
	        expand: true,
	        cwd: 'styles',
	        src: ['*.scss'],
	        dest: 'styles',
	        ext: 'main.css'
	      }]
	  }
	    },
watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/*.scss', 'js/src/*.js'],
      tasks: ['sass', 'concat']
    },
	
}	
});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch']);



};