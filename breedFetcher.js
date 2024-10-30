const needle = require('needle');

// Access the breed name from command-line arguments
const breed = process.argv[2];

if (!breed) {
  console.log("Please provide a breed name.");
  process.exit(1);
}

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

needle.get(url, (error, response) => {
  if (error) {
    console.error('Error fetching breed:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error: Status code', response.statusCode);
  } else {
    const data = response.body;
    if (data.length === 0) {
      console.log("Breed not found.");
    } else {
      console.log("Breed information:", data[0]);
    }
  }
});






