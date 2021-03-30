import styled from 'styled-components';
import { shade } from 'polished';

import beerBackground from '../../../assets/img/beer-background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 800px;  
  place-content: center;
  width: 100%;  
  
  form {
    align-items: center;
    background: var(--background-secondary);
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    height: 370px;
    text-align: center;
    width: 400px;
    
    h1 {
      margin: 30px 0;
    }
    
    a {
      align-self: flex-end;
      color: var(--white-orange);
      display: flex;
      margin: 10px 40px 0 0;
      text-decoration: none;
      transition: .3s ease;
      
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }    
  }
  
  > span {
    align-items: center;
    color: var(--white-orange);
    display: flex;
    margin-top: 20px;    
    
    a {
      color: var(--orange-primary);
      margin-left: 5px;
      transition: .3s ease;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }      
    }   

    svg {
      margin-right: 10px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${beerBackground}) no-repeat center;
  background-size: cover;
`;
