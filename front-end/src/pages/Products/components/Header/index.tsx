import React, { FC } from 'react';

import { Container, Title } from './style';
import SearchBox from '../SearchBox';

const Header: FC = () => {
  const a = '';

  return (
    <Container>
      <Title>
        <div>
          <h1>Elias Carvalho</h1>
          <span>Sunday, 3 Apr 2021</span>
        </div>
        <SearchBox />
      </Title>
    </Container>
  );
};

export default Header;
