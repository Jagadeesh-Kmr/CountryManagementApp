import './index.css';

const CountryList = ({ countries, editCountry, deleteCountry }) => {
  return (
    <ul className="country-list">
      {countries.length === 0 ? (
        <p className="empty-list-message">No countries available. Click "Add Country" to create one.</p>
      ) : (
        countries.map((country) => (
          <li key={country.id} className="country-item">
            <span>{country.name}</span>
            <div className="actions">
              <button className="edit-button" onClick={() => editCountry(country.id)}>Edit</button>
              <button className="delete-button" onClick={() => deleteCountry(country.id)}>Delete</button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default CountryList;
