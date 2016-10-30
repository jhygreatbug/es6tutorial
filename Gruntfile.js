module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      docs: {
        expand: true,
        cwd: 'src/',
        src: [
          'app/**',
          'css/**',
          'docs/**',
          'images/**',
          'js/**',
          '404.html',
          'config.js',
          'index.html',
          'README.md',
          'sidebar.md'
        ],
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

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['copy', 'shell:update']);
  grunt.registerTask('init', ['shell:init']);

};