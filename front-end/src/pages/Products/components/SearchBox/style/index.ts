import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  height: 48px;
  padding: 14px;
  width: 220px;

  background: #2D303E;
  box-sizing: border-box;
  border-radius: 8px;
  
  input {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #ABBBC2;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #ABBBC2;
    }
  }
  
  img {
    width: 20px;
    height: 20px;
    margin: 0 8px;
  }
`;
