import React from 'react';
import {SearchFormDiv} from './searchForm.style';

import CustomButton from '../customButton/customButton';
import  SearchInput from '../searchInput/searchInput';

const SearchForm = () => {

    return(
        <SearchFormDiv>
                <SearchInput placeholder='Search ID' type='search'/>
                <CustomButton>Landing Pad</CustomButton>
            </SearchFormDiv>
    )
   
}

export default SearchForm;