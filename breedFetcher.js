const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (error, response) => {
    if (error) {
      callback(error, null); // Pass the error and null for description
      return;
    }

    if (response.statusCode !== 200) {
      callback(`Status Code ${response.statusCode}`, null); // Handle non-200 status code as an error
      return;
    }

    const data = response.body;

    if (data.length === 0) {
      callback("Breed not found", null); // Pass an error message when no breed is found
    } else {
      const description = data[0].description;
      callback(null, description); // Pass null for error and breed description
    }
  });
};

module.exports = { fetchBreedDescription };





