import React, { FC } from 'react';

import { Container, Content } from './style';
import Sidebar from '../../components/Sidebar';

const Products: FC = () => (
  <>
    <Container>
      <Content>
        <Sidebar />
      </Content>
    </Container>
  </>
);

export default Products;
