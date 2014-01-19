module.exports = function(grunt) {
   grunt.initConfig({
   		pkg : grunt.file.readJSON('package.json'),
   		coffee : {
   			glob_to_multiple: {
			    expand: true,
			    flatten: true,
			    cwd: 'js/coffee',
			    src: ['*.coffee'],
			    dest: 'js/',
			    ext: '.js'
			  },
   		},
   		connect : {
   			server : {
   				options : {
   					port : 4000,
   					 
   					hostname : '*'
   				}
   			}
   		},
   		watch : {
   			script : {
   				files : "js/coffee/*.coffee",
   				tasks : "coffee",
   				options : {
   					livereload : true
   				}
   			}
   		}
   })

   grunt.loadNpmTasks('grunt-contrib-coffee');
   grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.registerTask('default',['coffee','connect','watch'])

};