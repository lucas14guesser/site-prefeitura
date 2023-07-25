import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs'

import '../../Styles/navbar/SearchBar.css'

const TextSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preDefault();
    // Codar a lógica futuramente com o banco de dados conectado
    console.log('Termo de pesquisa:', searchTerm);
  };

  return (
    <div className="search_bar">
        <form onSubmit={handleFormSubmit}>
        <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="O que você procura?"
        />
        <button type="submit"><BsSearch /></button>
        </form>
    </div>
  );
};

export default TextSearchBar;