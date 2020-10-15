import styled, {css} from 'styled-components';

const mobileSize = css`
    width:33%;
    height:100vh;
    flex-direction:column;
`;

export const Control = styled.div`
    width:100%;
    height:33%;
    align-items: center;
    display:flex;
    justify-content:space-evenly;
    flex-direction:row;

    @media screen and (min-width: 768px) and (max-width:1024px){
        ${mobileSize}
     } 
     @media screen and (max-width: 768px){
         ${mobileSize}
     } 
`;
