module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['src/**/*'],
        dest: 'dist/'
      }
    },
    shell: {
      update: {
        command: 'node update.js > update.log'
      },
      init: {
        command: 'node update.js > update.log'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['concat', 'shell:update']);
  grunt.registerTask('init', ['shell:init']);

};