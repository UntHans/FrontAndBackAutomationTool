/*
Scenario 2: Retrieve the top 5 “Bottom Performers”
• Locate the index for the worst performing stocks on the page and list the top
five (5) worst performing stocks indexed by the change percentage (CHG % ).
• Print the names, last price (LAST) and the change percentage (CHG % ) to the
console or in your test report. 
*/


let marketWatch = browser.page.marketWatch();


//Given user wants to retrieve {top 5 “Bottom Performers”} from Market Watch Tab
describe('Retrieve the top 5 “Bottom Performers”', function () {
    before(function (browser) {
      browser.window.maximize()
      browser.navigateTo('/')
    })
  
    it('Check to ensure that user is on MarketWatch website', function() {
      marketWatch.click('@closeButton')
      marketWatch.waitForElementVisible('@marketPlaceLogo')
    })
  
    it('Retrieve the top 5 Bottom Performers', function (browser) {
      marketWatch.waitForElementVisible('@articleHeadline')

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