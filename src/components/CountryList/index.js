import React from "react";
import StateList from "../StateList";
import './index.css'

const CountryList = (props) => {
   const { countries, editCountry, deleteCountry, setCountries }=props
 
  const addState = (countryId) => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      setCountries(
        countries.map((country) =>
          country.id === countryId
            ? {
                ...country,
                states: [
                  ...country.states,
                  { id: Date.now(), name: stateName, cities: [] },
                ],
              }
            : country
        )
      );
    }
  };

  return (
    <div>
      {countries.map((country) => (
        <div key={country.id}>
            <div className="country-container">
          <h2 className="country-name">
            {country.name}
            </h2>
            <button className="edit-country-button" onClick={() => editCountry(country.id)}>Edit</button>
            <button className="delete-country-button" onClick={() => deleteCountry(country.id)}>Delete</button>
        
            </div>
          <button className="add-state-button" onClick={() => addState(country.id)}>Add State</button>
          <StateList
            country={country}
            setCountries={setCountries}
            countries={countries}
          />
        </div>
      ))}
    </div>
  );
};

export default CountryList;