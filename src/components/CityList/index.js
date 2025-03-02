import React from "react";
import './index.css'

const CityList = (props) => {
    const { state, country, setCountries, countries }=props
 
  const addCity = () => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      setCountries(
        countries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === state.id
                    ? { ...s, cities: [...s.cities, { id: Date.now(), name: cityName }] }
                    : s
                ),
              }
            : c
        )
      );
    }
  };

  

 
  const deleteCity = (cityId) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCountries(
        countries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === state.id
                    ? { ...s, cities: s.cities.filter((city) => city.id !== cityId) }
                    : s
                ),
              }
            : c
        )
      );
    }
  };

  return (
    <div>
      <button className="add-city-button" onClick={addCity}>Add City</button>
      {state.cities.map((city) => (
        <div key={city.id}>
            <div className="city-container">
          <p className="city-name">
            {city.name}
            </p>


            <button className="delete-city-button" onClick={() => deleteCity(city.id)}>Delete</button>
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityList;