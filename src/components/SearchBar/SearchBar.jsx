import { useState } from 'react';
import searchCss from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onChange(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={searchCss.form}>
      <label className={`${searchCss.label}`}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search a film here"
          className={searchCss.input}
          value={inputValue}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={searchCss.submitButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
