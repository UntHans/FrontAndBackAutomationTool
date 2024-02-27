/*
Scenario 1: Retrieve articles from the “Market Watch” tab
• Navigate to the “Market Watch” tab and retrieve the first 7 articles listed and
print out the name of each article to the console or in your test report. 
*/

let marketWatch_SPX = browser.page.marketWatch_SPX();
const marketWatch_SPX_helpers = require('../../pageobjects/marketWatch_SPX_helpers');

//Given user want to {retrieve articles} from Market Watch Tab
//todo -- make it more dynamic to multiple actions as in Scenario 2
describe('Retrieve articles from the “Market Watch” tab', function () {

//When user has navigated to SPX page
    before(function (browser) {
      browser.navigateTo(marketWatch_SPX.url)
      browser.assert.titleEquals(marketWatch_SPX_helpers.pageTitle)
    })

//Then retrieve first 7 article titles and print to console
    it('Retrieve first 7 article titles from Market Watch Tab within current page', function (browser) {
      marketWatch_SPX.waitForElementVisible('@articleHeadline')
      for (let i = 1; i < 5; i++) {
        browser.getText('xpath', '//div[6]/div[2]/div[1]/mw-tabs/div[2]/div[1]/mw-scrollable-news-v2/div/div/div['+[i]+']/div/h3/a', response => console.log(response.value))
      }
      for (let i = 6; i < 9; i++) {
        browser.getText('xpath', '//div[6]/div[2]/div[1]/mw-tabs/div[2]/div[1]/mw-scrollable-news-v2/div/div/div['+[i]+']/div/h3/a', response => console.log(response.value))
      } 
    })
  })