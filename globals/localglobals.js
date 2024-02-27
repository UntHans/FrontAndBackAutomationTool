module.exports = {

  // This will be run before each test suite is started
  beforeEach(browser, done) {
    const baseUrl = 'https://www.marketwatch.com/';
    // getting the session info
    browser.windowMaximize().url(baseUrl);
    done();
  },
  
  // This will be run after each test suite is finished
  afterEach(browser, done) {
    //console.log(browser.currentTest);
    done();
  }

};