/*
Scenario 2: Count the number of countries listed in this response
• Retrive the JSON response and perform a count on the number of countries
listed
• Please print the result to the console/ test report 
*/

//Given user wants amount of countries listes within /all endpoint

describe('Countries count', function () {
    it('get count of total countries', async function({supertest}) {
      await supertest
        .request("https://restcountries.com/v3.1")
        .get("/all")
        .expect(200)
        .expect('Content-Type', /json/)

        .then(function(response){ 
//When response provides amount of objects within response of /all
            const numberOfCountries = response._body.length;
//Then log amount of countries
            console.log("Number of countries listed: " + numberOfCountries)
        })
        .catch(console.error);
    });
  });