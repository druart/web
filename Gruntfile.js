/*******************************************************
 *  
********************************************************/

module.exports = function(grunt) {

	require('load-grunt-config')(grunt);

	grunt.registerTask('default', [
		'clean',
		'styles',
		"scripts",
		"watch"
	]);

	grunt.registerTask('styles', [
		'sass',
		'postcss'
	]);

	grunt.registerTask('scripts', [
		'concat',
		'uglify'
	]);
};