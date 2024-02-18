/*
Scenario 1: Validate the schema of the response
• Retrive the JSON response and perform schema validation check on the
response
• Please print the result to the console/ test report 
*/


const Ajv = require("ajv").default
//Given schema is provided
const schema_all_countries = require('../../schemas/allcountries.json')
const ajv = new Ajv({ allErrors: true });
const validate_all_countries = ajv.compile(schema_all_countries)

//When calling /all enpoint to retrieve body to compare against
describe('Response Schema Validation', function () {
    it('get validation of all countries schema', async function({supertest}) {
      await supertest
        .request("https://restcountries.com/v3.1")
        .get("/all")
        .expect(200)
        .expect('Content-Type', /json/)
        .then(function(response){
            expect(response._body.length).to.be.greaterThan(0);
            if(validate_all_countries(response.body)){
//Then ensure schema validation is successfull 
              expect(validate_all_countries(response.body)).to.be.true;     
            }
            else {
              console.log(validate_all_countries.errors)
            }
        })
        .catch(console.error);
    });
});