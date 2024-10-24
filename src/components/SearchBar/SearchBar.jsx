import { useState } from 'react';
import searchCss from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Please enter a search term', {
        style: {
          background: 'red',
          color: '#fff',
        },
      });
      setInputValue('');
      return;
    }
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
    }
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
