/*
Scenario 2: Retrieve the top 5 “Bottom Performers”
• Locate the index for the worst performing stocks on the page and list the top
five (5) worst performing stocks indexed by the change percentage (CHG % ).
• Print the names, last price (LAST) and the change percentage (CHG % ) to the
console or in your test report. 
*/


let marketWatch_SPX = browser.page.marketWatch_SPX();
const marketWatch_SPX_helpers = require('../../pageobjects/marketWatch_SPX_helpers');


//Given user wants to retrieve {top 5 “Bottom Performers”} from Market Watch Tab
describe('Retrieve the top 5 “Bottom Performers”', function () {
    
    //When user has navigated to SPX page
    before(function (browser) {
      browser.navigateTo(marketWatch_SPX.url)
      browser.assert.titleEquals(marketWatch_SPX_helpers.pageTitle)
    })

    it('Retrieve the top 5 Bottom Performers', function (browser) {
      marketWatch_SPX.waitForElementVisible('@articleHeadline')

      for (let i = 1; i < 6; i++) {
        browser.getText('xpath', '//div[6]/div[3]/div[2]/div/table/tbody/tr['+[i]+']/td[1]/a', response => {
          console.log('=====================')
          console.log('Stock Name: '+response.value)
        });

        browser.getText('xpath', '//div[6]/div[3]/div[2]/div/table/tbody/tr['+[i]+']/td[2]/bg-quote', response => {
          console.log('Last Price: '+response.value)
        });

        browser.getText('xpath', '//div[6]/div[3]/div[2]/div/table/tbody/tr['+[i]+']/td[4]/bg-quote', response => {
          console.log('Change Percentage: '+response.value)
        });
      }
    })

  })