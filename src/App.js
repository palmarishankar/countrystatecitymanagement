import React, { useState } from "react";
import CountryList from "./components/CountryList";
import { v4 as uuidv4 } from 'uuid';
import "./App.css"

const App = () => {
  const [countries, setCountries] = useState([]);

  
  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([
        ...countries,
        { id:uuidv4(), name: countryName, states: [] },
      ]);
    }
  };


  const editCountry = (id) => {
    const newName = prompt("Enter new country name:");
    if (newName) {
      setCountries(
        countries.map((country) =>
          country.id === id ? { ...country, name: newName } : country
        )
      );
    }
  };


  const deleteCountry = (id) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((country) => country.id !== id));
    }
  };

  return (
    <div>
      <h1 className="heading">Country, State, and City Management Application</h1>
      <button onClick={addCountry} className="add-button">Add Country</button>
      <CountryList
        countries={countries}
        editCountry={editCountry}
        deleteCountry={deleteCountry}
        setCountries={setCountries}
      />
    </div>
  );
};

export default App;