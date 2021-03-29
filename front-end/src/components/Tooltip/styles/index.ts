import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  transition: 0.4s;    
  
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
  
  span {
    background: var(--red-error);
    border-radius: 5px;
    bottom: 120%;
    color: var(--white);
    font-size: 14px;
    left: 50%;
    max-width: 280px;
    opacity: 0;
    padding: 8px;
    position: absolute;
    transform: translateX(-50%);
    visibility: hidden;
    width: max-content;
    
    &::before {
      border-color: var(--red-error) transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      content: '';
      left: 50%;
      position: absolute;
      top: 100%;
      transform: translateX(-50%);
    }
  }

`;
