import styled, { css } from 'styled-components';
import {BorderRadius} from '../../theme';

const mobileSize = css`
    width:100vw;
    height:100vh;
`;


export const Dashboard = styled.div`
    width:50%;
    height:50%;
    background-color: #000000;
    padding:10px;
    ${BorderRadius};

    // dashboard mobile layout
    @media screen and (min-width: 768px) and (max-width:1024px){
        display:flex;
        padding:0;
        ${mobileSize};
    } 
    @media screen and (max-width: 768px){
        display:flex;
        padding:0;
        ${mobileSize};
     
    } 
`;

