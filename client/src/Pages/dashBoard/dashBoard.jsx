import React from 'react';
import {Dashboard} from './dashBoard.style';

import DisplayConsole from '../../Components/displayConsole/displayConsole'
import ControlConsole from '../../Components/controlConsole/controlConsole';

const DashboardPage = () => (
    <Dashboard>
        <DisplayConsole/>
        <ControlConsole/>
    </Dashboard>
)

export default DashboardPage;
