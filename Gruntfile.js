module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    stylus: {
        options: {
            paths: ['styl']
        },
        default: {
            options: {
                compress: true
            },
            files: {
                'css/stylmore.css': 'styl/stylmore.styl',
                'docs/common.css': 'docs/common.styl',
                'docs/layout.css': 'docs/layout.styl'
            }
        },
        debug: {
            options: {
                compress: false
            },
            files: {
                'css/stylmore.debug.css': 'styl/stylmore.styl'
            }
        }
    },
    
    watch: {
        stylus: {
            files: ['styl/*.styl', 'styl/include/*.styl', 'docs/*.styl'],
            tasks: ['stylus']
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['stylus']);
};