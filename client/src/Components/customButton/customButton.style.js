import styled, {css} from 'styled-components';
import {BorderRadius} from '../../theme';

const mobileSize = css`
    width:80%;  
    font-size: .8rem;
`;


export const Button = styled.button`
    height:50px;
    width:25%;
    background-color:#10BCE2;
    color:#ffffff;
    font-size:1rem;
    justify-content: center;
    align-items: center; 
    outline:none;
    cursor: pointer;
    ${BorderRadius}

    &:hover{
        background-color:#ffffff;
        color:#10BCE2;
    }
    @media screen and (min-width: 768px) and (max-width:1024px){
        ${mobileSize}
     } 
     @media screen and (max-width: 768px){
         ${mobileSize}
     } 
`;
