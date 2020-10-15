import React from 'react';
import {Control} from './controlConsole.style';

import Logo from '../logo/logo'
import CustomButton from '../customButton/customButton'
import SearchForm from '../searchForm/searchForm'

const ControlConsole = () => {


   return(
    <Control>
        <CustomButton>Capsules</CustomButton>
        <Logo/>
        <SearchForm/>
    </Control>
   )
   
}

export default ControlConsole;