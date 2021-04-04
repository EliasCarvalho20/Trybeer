import styled from 'styled-components';

export const Container = styled.header`
  align-items: flex-start;  
  display: flex;
  flex-direction: column;
  height: 122px;
  position: static;
  width: 633px;
`;

export const Title = styled.div`
  align-items: center;
  display: flex;  
  flex-direction: row;
  height: 65px;
  justify-content: space-between;
  position: static;
  width: 100%;  
  
  div:first-child {
    display: flex;
    flex-direction: column; 
    height: 65px;
    width: 250px;

    color: var(--white);
    font-style: normal;
    line-height: 140%;
    
    h1 {
      font-size: 28px;
      font-weight: 600;      
      height: 39px;
      transform: translateY(15%);
      width: 100%;      
    }
    
    span {
      font-size: 16px;
      font-weight: normal;
      height: 22px;
      width: 137px;      
    }
  }
`;
