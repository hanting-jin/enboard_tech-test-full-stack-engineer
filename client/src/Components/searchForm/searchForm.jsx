import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {SearchFormDiv} from './searchForm.style';

import CustomButton from '../customButton/customButton';
import  SearchInput from '../searchInput/searchInput';

import {fetchLandingPadDataStartAsync} from '../../redux/LandingPads_state/LandingPads.action'

const SearchForm = () => {
    const dispatch = useDispatch();
    const {landingPadID} =  useSelector(state=>state.landingPad)
    const [searchContent, setSearchContent] = useState('');
    const handleChange = (landingPadID) => {
     
    }
  
    return(
        <SearchFormDiv>
                <SearchInput placeholder='Search ID' value={landingPadID} type='search' onChange={handleChange()}/>
                <CustomButton onClick={()=>dispatch(fetchLan1dingPadDataStartAsync(landingPadID))}>Landing Pad</CustomButton>
            </SearchFormDiv>
    )
   
}



export default SearchForm;