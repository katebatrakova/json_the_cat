//require the request library
const request = require('request');
//inline argument
const breedName = process.argv.slice(2).toString();


const fetchBreedDescription = function (breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, 'utf8', (error, response, body) => {
    //handling an error
    // if (error) {
    //   return callback(error, null)
    // }

    const bodyToObject = JSON.parse(body);
    const catBreedInfo = bodyToObject[0];

    if (catBreedInfo) {
      callback(null, catBreedInfo['description'])
    }

    if (!catBreedInfo) {
      callback(error, null);
    };
  })
}

module.exports = { fetchBreedDescription };
`The requested breed has noot been found`