import React from "react";
import CityList from "../CityList";
import './index.css'

const StateList = (props) => {
    const { country, setCountries, countries }=props
  const editState = (stateId) => {
    const newName = prompt("Enter new state name:");
    if (newName) {
      setCountries(
        countries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((state) =>
                  state.id === stateId ? { ...state, name: newName } : state
                ),
              }
            : c
        )
      );
    }
  };

 
  const deleteState = (stateId) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      setCountries(
        countries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.filter((state) => state.id !== stateId),
              }
            : c
        )
      );
    }
  };

  return (
    <div>
      {country.states.map((state) => (
        <div key={state.id} >
            <div className="state-container">
          <h1 className="state-heading" >
            {state.name}
            </h1>
           
            <button  className="edit-state-button" onClick={() => editState(state.id)}>Edit</button>
            <button className="delete-state-button" onClick={() => deleteState(state.id)}>Delete</button>
       
          </div>
          <CityList
            state={state}
            country={country}
            setCountries={setCountries}
            countries={countries}
          />
        </div>
      ))}
    </div>
  );
};

export default StateList;