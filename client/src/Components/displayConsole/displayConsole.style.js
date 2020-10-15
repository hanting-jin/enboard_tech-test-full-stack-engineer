import styled, {css} from 'styled-components';
import {BorderRadius} from '../../theme';

const mobileSize = css`
        width:66%;
        height:100vh;   
`;

export const Display = styled.div`
    width:auto;
    height:66%;
    background-color: #ffffff;
    color:#000000;
    ${BorderRadius}

    @media screen and (min-width: 768px) and (max-width:1024px){
        ${mobileSize}
 
     } 
     @media screen and (max-width: 768px){
         ${mobileSize}
     } 
`;
