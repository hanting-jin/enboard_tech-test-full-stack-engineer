import React from 'react';
import {Control} from './controlConsole.style';

import Logo from '../logo/logo'
import CustomButton from '../customButton/customButton'
import SearchForm from '../searchForm/searchForm'

import { useDispatch } from "react-redux";
import {fetchCapsuleDataStartAsync}  from "../../redux/Capsules_state/capsules.action";


const ControlConsole = () => {
    const dispatch = useDispatch();

   return(
    <Control>
        <CustomButton onClick={()=> dispatch(fetchCapsuleDataStartAsync())}>Capsules</CustomButton>
        <Logo/>
        <SearchForm/>
    </Control>
   )
   
}

export default ControlConsole;