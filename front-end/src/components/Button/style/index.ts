import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--orange-primary);
  border-radius: 10px;
  border: 0;
  color: var(--white-orange);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  height: 56px;
  margin-top: 16px;
  padding: 0 16px;
  transition: .5s ease;
  width: 80%;

  &:hover {
    background: ${shade(0.2, '#EA7C69')}
  }
`;
