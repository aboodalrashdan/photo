import React from 'react';

interface SearchFormProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (searchQuery: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ query, setQuery, onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          autoFocus
          required
        />
      </form>
      <div className="buttons">
        <button onClick={() => onSearch('mountain')}>Mountain</button>
        <button onClick={() => onSearch('beach')}>Beach</button>
        <button onClick={() => onSearch('bird')}>Bird</button>
        <button onClick={() => onSearch('food')}>Food</button>
      </div>
    </>
  );
};

export default SearchForm;
