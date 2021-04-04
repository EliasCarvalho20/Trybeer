import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: auto;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;  
  width: 100%;

  img {
    transform: translateY(-80%);
    width: 50%;
  }
  
  form {
    align-items: center;
    background: var(--background-secondary);
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    height: 370px;
    transform: translateY(-15%);
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
        color: ${shade(0.2, '#EA7C69')};
      }
    }    
  }
  
  > span {
    align-items: center;
    color: var(--white-orange);
    display: flex;
    transform: translateY(-150%);
    
    a {
      color: var(--orange-primary);
      margin-left: 5px;
      transition: .3s ease;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#EA7C69')};
      }      
    }   

    svg {
      margin-right: 10px;
      transform: translateY(10%)
    }
    
    svg > *  { 
      color: var(--orange-primary);
    }
  }
`;
