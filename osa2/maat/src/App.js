import { useEffect, useState } from "react";
import axios from "axios";

const Filter = ({ value, handle }) => {
  return (
    <div>
      <label htmlFor="filterInput">find countries</label>
      <input id="filterInput" type="text" value={value} onChange={handle} />
    </div>
  );
};

const Countries = ({ countries, filterQ }) => {
  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filterQ);
  });
  return (
    <div>
      {filteredCountries.length < 10 && filteredCountries.length > 1
        ? filteredCountries.map((filteredCountry) => (
            <div key={filteredCountry.ccn3}>{filteredCountry.name.common}</div>
          ))
        : filteredCountries.length === 1
        ? filteredCountries.map((filteredCountry) => (
          <div key={filteredCountry.ccn3}>
            {console.log(filteredCountry)}
              <h1>{filteredCountry.name.common}</h1>
              <div className="capital">
                <p>{filteredCountry.capital[0]}</p>
                <p>area {filteredCountry.area}</p>
              </div>
              <div className="languages">
                <h3>languages:</h3>
                <ul>
                  {Object.values(filteredCountry.languages).map(
                    (lang, index) => (
                      <li key={index}>{lang}</li>
                    )
                  )}
                </ul>
            </div>
            <div className="flag">
              <img src={filteredCountry.flags['png']} />
            </div>
            </div>
          ))
        : "Too many matches, specify another filter"}
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");

  const handleInputChange = (event) => {
    setFilterQuery(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      //console.log("promise fulfilled", response.data)
      setCountries(response.data);
    });
  }, []);
  return (
    <div>
      <Filter value={filterQuery} handle={handleInputChange} />
      {filterQuery.length > 0 ? (
        <Countries countries={countries} filterQ={filterQuery} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
