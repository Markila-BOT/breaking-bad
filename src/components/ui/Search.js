import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };
  return (
    <section className={'search'}>
      <input
        type='text'
        placeholder='Search characters'
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </section>
  );
};

export default Search;
