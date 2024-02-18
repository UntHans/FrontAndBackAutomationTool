/*
Scenario 1: Retrieve articles from the “Market Watch” tab
• Navigate to the “Market Watch” tab and retrieve the first 7 articles listed and
print out the name of each article to the console or in your test report. 
*/


let marketWatch = browser.page.marketWatch();

//Given user want to {retrieve articles} from Market Watch Tab
//todo -- make it more dynamic to multiple actions as in Scenario 2
describe('Retrieve articles from the “Market Watch” tab', function () {
  before(function (browser) {
    browser.window.maximize()
    browser.navigateTo('/')
  })

//When user is on MarketWatch website
    it('Check to ensure that user is on MarketWatch website', function() {
      marketWatch.click('@closeButton')
      marketWatch.waitForElementVisible('@marketPlaceLogo')
    })

//Then retrieve first 7 article titles and print to console
    it('Retrieve first 7 article titles from Market Watch Tab within current page', function (browser) {
      marketWatch.waitForElementVisible('@articleHeadline')
      for (let i = 1; i < 5; i++) {
        browser.getText('xpath', '//div[6]/div[2]/div[1]/mw-tabs/div[2]/div[1]/mw-scrollable-news-v2/div/div/div['+[i]+']/div/h3/a', response => console.log(response.value))
      }
      for (let i = 6; i < 9; i++) {
        browser.getText('xpath', '//div[6]/div[2]/div[1]/mw-tabs/div[2]/div[1]/mw-scrollable-news-v2/div/div/div['+[i]+']/div/h3/a', response => console.log(response.value))
      } 
    })
  })