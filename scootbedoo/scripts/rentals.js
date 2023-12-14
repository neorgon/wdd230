let baseURL = '';

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  baseURL = 'http://127.0.0.1:5500/scootbedoo/';
}
else {
  baseURL = 'https://neorgon.github.io/wdd230/scootbedoo/';
}

const rentalList = `${baseURL}data/rental.json`;
const rentals = document.getElementById('rentals');

const getRentalsData = async () => {
  try {
    const response = await fetch(rentalList);
    if (!response.ok) {
      throw new Error(`ERROR: ${response.status} ${response.statusText}`)
    }
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
}

getRentalsData();