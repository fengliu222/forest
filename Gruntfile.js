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
   					port : 80,
   					hostname : '*'
   				}
   			}
   		},
   		watch : {
            options : {
               livereload : true
            },

   			script : {
   				files : "js/coffee/*.coffee",
   				tasks : "coffee",
   			} 
   		}
   })

   grunt.loadNpmTasks('grunt-contrib-coffee');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.registerTask('default',['coffee','connect','watch'])

};