import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const Content = styled.div`
  border-radius: 16px;
  height: 834px;
  position: relative;
  width: 1194px;
`;

export const Sidebar = styled.div`
  background: var(--background-secondary);
  border-radius: 15px; 
  height: 834px;
  left: 0;
  position: absolute;
  top: 0;
  width: 104px;
  
  filter: drop-shadow(0 4px 4px 
        rgba(0, 0, 0, 0.25));
  
  img {
    position: absolute;
    left: 23.08%;
    right: 23.08%;
    top: 2.88%;
    bottom: 90.41%;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: absolute;
  width: 92px;
  height: 612px;
  left: 12px;
  top: 96px;  
  
  div {
    display: flex;
    align-items: center; 
    justify-content: center;
    position: static;
    width: 92px;
    height: 102px;
    left: 0;

    border-radius: 10px;       
    
    svg {
      transform: translateX(-30%);
    }
  
    svg path {
      fill: var(--orange-primary);      
    }
  }
  
  > svg {
    align-self: center;
    transform: translateX(-30%) translateY(320%);
  }

  svg path {
    fill: var(--orange-primary);
  }
`;
