import styled from 'styled-components';
import {BorderRadius} from '../../theme';

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
`;
