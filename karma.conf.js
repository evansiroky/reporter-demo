// Karma configuration
let webpackConfig = require('./webpack.config.js')

const instanbulInstrumenterCfg = {
  test: /\.js$/,
  exclude: /(tests|node_modules|bower_components)\//,
  loader: 'istanbul-instrumenter',
  query: {
    esModules: true
  }
}

// webpackConfig.module.preLoaders = [ instanbulInstrumenterCfg ]
webpackConfig.module.postLoaders = [ instanbulInstrumenterCfg ]

module.exports = function (config) {
  config.set({

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'IE', 'Firefox', 'Safari'],
    browsers: ['Chrome'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // test coverage
    coverageReporter: {
      type: 'in-memory'
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: ['tests/index.js'],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // list of plugins
    plugins: ['karma-chai', 'karma-chrome-launcher', 'karma-mocha',
      'karma-sourcemap-loader', 'karma-webpack',
      'karma-coverage', 'karma-mocha-reporter', 'karma-remap-coverage'],

    // web server port
    port: 9876,

    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap'],
      'tests/**/*\.test.js': [ 'webpack' ],
      'src/**/*.js': ['coverage', 'webpack']
    },

    remapCoverageReporter: {
      html: './coverage-remap/html'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'mocha', 'coverage', 'remap-coverage'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // webpack config
    webpack: webpackConfig

  })
}
