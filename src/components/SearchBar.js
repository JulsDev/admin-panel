import React, { useState } from 'react';


const searchBarStyle = {
  backgroundColor: '#0097a7',
}

export default function SearchBar(props) {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmitNumber(value);
  }

  return(
    <nav  style={searchBarStyle}>
      <div className="nav-wrapper">
        <form id="searchForm" onSubmit={handleSubmit}>
            <div className="input-field" tabIndex="1">
              <input value={value} onChange={handleChange} id="search" type="search" placeholder="Введите ИНН" pattern="^[0-9]+$" required />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
        </form>
      </div>
    </nav>
  );
}

