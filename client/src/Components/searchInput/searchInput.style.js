import styled, {css} from 'styled-components';

const mobileSize = css`
    width:80%;
`;

export const Input = styled.input`
    width:25%;
    height:50px;
    color:#707070;
    font-size:.8rem;
    &:focus {
        outline: none;
    }
    @media screen and (min-width: 768px) and (max-width:1024px){
        ${mobileSize}
     } 
     @media screen and (max-width: 768px){
         ${mobileSize}
     } 
  
    `;