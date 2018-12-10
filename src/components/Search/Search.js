import React from 'react';
import { Input } from './Search-styles';

const Search = (props) => {
  return (
    <Input type="text" placeholder={props.test} />
  )
};

export default Search;