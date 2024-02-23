// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: [''],
  
    // See https://nightwatchjs.org/guide/concepts/page-object-model.html
    page_objects_path: ['pageobjects'],
  
    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
    custom_commands_path: [],
  
    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
    custom_assertions_path: [],
  
    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
    plugins: ['@nightwatch/apitesting'],
  
    // See https://nightwatchjs.org/guide/concepts/test-globals.html
    globals_path: '',    
  
    test_workers: {
      enabled: true
    },
  
    test_settings: {
      default: {
        disable_error_log: false,
        launch_url: 'https://www.marketwatch.com/investing/index/spx',
  
        screenshots: {
          enabled: true,
          path: 'screens',
          on_failure: true
        },
  
        desiredCapabilities: {
          browserName: 'chrome',
          acceptSslCerts: false,
          'goog:chromeOptions': {
            args: ['--ignore-certificate-errors' ,'--disable-popup-blocking'],  // Add any other necessary options
          },
          prefs: {
            'profile.default_content_setting_values.notifications': 2,
            'profile.managed_default_content_settings.cookies': 2
          }
        },
  
        webdriver: {
          start_process: true,
          server_path:  require('chromedriver').path,
          port: 9515,
          host: 'localhost',
          ssl: false,
          default_path_prefix: '',
          proxy: undefined
        },
  
      },
  
      api_testing: {
        start_session: false,
        webdriver: {
          start_process: false,
        }
      }
  
    },
  
    usage_analytics: {
      enabled: true,
      log_path: './logs/analytics',
      client_id: '1d906358-6df8-4c61-ba5a-441f7362b589'
    }
  
  };