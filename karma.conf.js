//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

      files: [
          '../bower_components/angular/angular.js',
          '../bower_components/angular-resource/angular-resource.js',
          '../bower_components/angular-ui-router/release/angular-ui-router.min.js',
          '../bower_components/angular-local-storage/dist/angular-local-storage.js',
          '../bower_components/angular-mocks/angular-mocks.js',
          'scripts/*.js',
          'scripts/services/**/*.js',
          'scripts/components/**/*.js',
          'scripts/routes/**/*.js',
          'views/**/*.html',
          '../test/unit/**/*.js'
      ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
