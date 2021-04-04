import React, { FC } from 'react';

import { Container, Content, Column } from './style';
import Sidebar from '../../components/Sidebar';
import Header from './components/Header';

const Products: FC = () => (
  <>
    <Container>
      <Content>
        <Sidebar />
        <Column>
          <Header />
        </Column>
      </Content>
    </Container>
  </>
);

export default Products;
