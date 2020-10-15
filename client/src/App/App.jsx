import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Application } from './styles';

import DashboardPage from '../Pages/dashBoard/dashBoard'

const App = () => (
    <>
        <Application >
           <DashboardPage/>
        </Application>
        <GlobalStyle />
    </>
);

export default hot(App);