module.exports = function(grunt) {

  grunt.initConfig({

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 50
          },{
            width: 800,
            suffix: '_large_1x',
            quality: 30
          },{
            width: 1000,
            suffix: '_med_2x',
            quality: 50
            },{
            width: 500,
            suffix: '_med_1x',
            quality: 30
          },{
            width: 400,
            suffix: '_small_2x',
            quality: 50
          },{
            width: 200,
            suffix: '_small_1x',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['compass.jpg','minard.jpg','UdacityLogo.jpg','curve.jpg'],
          cwd: 'src/images/',
          dest: 'src/images/'
        }]
      }
    },

    imagemin: {
      dynamic: {
        files: [{
         expand: true,                        // Enable dynamic expansion
         cwd: 'src/images/',                  // Src matches are relative to this path
         src: ['**/*.{png,jpg,gif}'],         // Actual patterns to match
         dest: 'dist/images/'                 // Destination path prefix
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.css'                           // did not want to name this .min.css
        }]
      }
    },

    htmlmin: {                                     // Task
      dist: {                                      // Target
       options: {                                  // Target options
        removeComments: true,
        collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'src/index.html'      // 'destination': 'source'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/js/mov.js': ['src/js/mov.js']
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },

    copy: {
      main: {
        files: [
          {src: ['src/README.md'], dest: 'dist/README.md', filter: 'isFile'}
        ],
      },
    },

     uncss: {
      dist: {
        files: [
          {dest: 'dev/css/styleALL.css', src: 'src/index.html'}
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['responsive_images','imagemin','cssmin','htmlmin','uglify','copy']);

};
