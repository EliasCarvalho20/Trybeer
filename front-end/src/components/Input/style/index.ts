import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: var(--background);
  border-radius: 10px;
  border: 2px solid var(--white-orange);
  color: var(--grey);
  display: flex;
  padding: 16px;
  width: 100%;
  
  & + div {
    margin-top: 10px;
  }
  
  input {
    background: transparent;
    border: 0;
    color: var(--white-orange);
    flex: 1;

    &::placeholder {
      color: var(--grey);
    }
  }
`;
