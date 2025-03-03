import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CountryList from '../CountryList';
import './index.css';

const Home = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const newCountry = prompt('Enter a new country name:');
    if (newCountry) {
      setCountries([...countries, { id: uuidv4(), name: newCountry, states: [] }]);
    }
  };

  const editCountry = (id) => {
    const updatedName = prompt('Enter the new country name:');
    if (updatedName) {
      const confirmEdit = window.confirm(`Are you sure you want to rename this country to ${updatedName}?`);
      if (confirmEdit) {
        setCountries(
          countries.map((country) => (country.id === id ? { ...country, name: updatedName } : country))
        );
      }
    }
  };

  const deleteCountry = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this country? This will also delete all associated states and cities.'
    );
    if (confirmDelete) {
      setCountries(countries.filter((country) => country.id !== id));
    }
  };

  return (
    <div className="home-main-container">
      <h1>Country Management</h1>
      <button className="add-button" onClick={addCountry}>Add Country</button>
      <CountryList countries={countries} editCountry={editCountry} deleteCountry={deleteCountry} />
    </div>
  );
};

export default Home;
