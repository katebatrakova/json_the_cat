//require the request library
const request = require('request');

const breedArg = `?q=${process.argv.slice(2)}`;
const URL = `https://api.thecatapi.com/v1/breeds/search${breedArg}`;

request(URL, 'utf8', (error, response, body) => {
  if (error) console.log(error); //Handle request errors and print the error details to the screen.
  if (body !== []) {
    const bodyToObject = JSON.parse(body);
    console.log(bodyToObject[0].description);
  } else {
    console.log(`Sorry, the requested breed '${breedArg.slice(3)}' is not found`);//Edge Case: Breed Not Found
  }
});

