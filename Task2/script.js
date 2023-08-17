const API_KEY = 'kSI51Mnl7xWISg7RRx1mF3GLufsKX1lV5zaYu9XG'; 
const getTheCountryAPI = async () => {
    const url = `curl "https://countryapi.io/api/all?apikey"${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    displayCountry(data);
}
const displayCountry = countries => {
    const allCountries = countries.map(country => singleCountry(country));
    const divCountrylist = document.getElementById('Countries');
    divCountrylist.innerHTML = allCountries.join(" ");
}

const singleCountry = country => {
    return `
    <div class="single-country">
      <img src="${country.flags.png}" alt="">
      <h3>${country.name.common}</h3>
      <p><b>Capital:</b> ${country.capital}</p>
      <p><b>Population:</b> ${country.population}</p>
      <p><b>Currency:</b> ${getCurrency(country.currencies)}</p>
    </div>
    `;
}

const getCurrency = currencies => {
    if (currencies) {
        const currencyArray = Object.values(currencies);
        return currencyArray.map(currency => currency.name).join(', ');
    }
    return 'N/A';
}

getTheCountryAPI();
