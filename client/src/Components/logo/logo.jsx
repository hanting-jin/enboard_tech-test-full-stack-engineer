import React from 'react';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';


const logoStyle = {
    fill:'#FF4081',
}

const Logo = () => (
        <Rocket style={logoStyle}/>
)

export default Logo;