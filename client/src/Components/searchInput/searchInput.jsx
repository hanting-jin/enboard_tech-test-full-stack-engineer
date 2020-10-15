import React from 'react';
import {Input} from './searchInput.style'

const SearchInput = ({handleChange, ...props}) => (
    <Input onChange={handleChange}{...props}/>
)

export default SearchInput;