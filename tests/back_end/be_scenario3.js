/*
Scenario 3: Locate “South Africa” and identify the official languages
• Retrive the JSON response and assert “South-Africa” is listed
• List all the “Official Languages” for South Africa
• Assert if “Sign Language” is listed as on of the official languages 
*/



//Given provided countries to check languages and whether "Sign Language" is an officail language
// Array of countries to test
const countriesToTest = ["South Africa", "Poland", "Zimbabwe"];

describe('user needs country language information', function () {

  const logCountryInformation = async function (supertest, countryName) {
    try {
      const response = await supertest
        .request("https://restcountries.com/v3.1")
        .get(`/name/${encodeURIComponent(countryName)}`)
        .expect(200)
        .expect('Content-Type', /json/);

      const country = response.body[0];
// When language object is provided within response
      // Log all official languages
      const officialLanguages = country.languages;
// Then        
      Object.entries(officialLanguages).forEach(([code, name]) => {
        console.log(`Code: ${code}: || Name:  ${name}`);
      });


      // Assert Sign Language is listed as an officail language
      let signLanguageFound = false;
      Object.entries(officialLanguages).forEach(([code, name]) => {
      if (name.toLowerCase().includes('sign language')) {
        console.log('Sign Language is listed as an official language: '+ code +' || ' + name);
        signLanguageFound = true;
      }
      
    });
    
    // Log if Sign Language is not found after checking all languages
    if (!signLanguageFound) {
      console.log('Sign Language is not listed as an official language.');
    }

    } catch (error) {
      console.error(error);
      // Handle errors if needed
    }
  };

//Then
  // Loop through the array and create a test case for each country
  countriesToTest.forEach(country => {
    it(`get Officail Languages of ${country}`, async function ({ supertest }) {
      await logCountryInformation(supertest, country);
    });
  });
});
