import { useEffect, useState } from 'react';
import searchCss from './SearchBar.module.css';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [params, setParams] = useSearchParams();

  const queryValue = params.get('title');

  useEffect(() => {
    if (queryValue) {
      setInputValue(queryValue);
    }
  }, [queryValue]);

  useEffect(() => {
    if (queryValue) {
      onSubmit(queryValue);
    }
  }, []);

  const handleChange = e => {
    const value = e.target.value;

    if (value.trim() === '') {
      params.delete('title');
    } else {
      params.set('title', value);
    }
    setParams(params);
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
      return;
    }

    onSubmit(inputValue.trim());
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
