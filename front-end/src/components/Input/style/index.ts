import styled, { css } from 'styled-components';

import { ContainerProps } from '../interface';

export const Container = styled.div<ContainerProps>`
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

  ${(props) => props.isErrored && css`
    border-color: var(--red-error);
  `}
  
  ${(props) => props.isFocused && css`
    color: var(--orange-primary);
    border-color: var(--orange-primary);
  `}

  ${(props) => props.isFilled && css`
    color: var(--orange-primary);
  `}
  
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
