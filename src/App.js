import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queryToSearch, setQueryToSearch] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${queryToSearch}`
      );

      console.log(results.data);
      setItems(results.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [queryToSearch]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(query) => setQueryToSearch(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
