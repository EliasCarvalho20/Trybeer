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
    margin: 80px 0;
    text-align: center;
    width: 300px;
    
    h1 {
      margin-bottom: 30px;
    }
  }

  a {
    align-items: center;
    color: var(--orange-primary);
    display: flex;
    text-decoration: none;
    transition: .3s ease;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }  
  
`;

export const Background = styled.div`
  flex: 1;
  background: url(${beerBackground}) no-repeat center;
  background-size: cover;
`;
