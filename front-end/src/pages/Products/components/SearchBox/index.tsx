import React, { FC } from 'react';

import { Container } from './style';

import search from '../../../../assets/img/search.png';

const SearchBox: FC = () => (
  <Container>
    <img src={ search } alt="Search" />
    <input type="search" placeholder="Search for beers..." />
  </Container>
);

export default SearchBox;
