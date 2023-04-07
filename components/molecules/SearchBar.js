import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchBar = () => {
  return (
    <>
      <Input />
      <Button label="Press me" className="button" />
    </>
  );
};

export default SearchBar;
