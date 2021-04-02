import React, { FC } from 'react';

import {
  Container, Content, Sidebar, Menu,
} from './style';
import Svg from '../../components/Svg';
import sideLogo from '../../assets/sidebar/logo.png';
import {
  Dashboard, Discount, Home, LogOut, Message, Notification, Settings,
} from '../../assets/icons';

const Products: FC = () => {
  const svgFiles = [Home, Discount, Dashboard, Message, Notification, Settings];

  return (
    <>
      <Container>
        <Content>
          <Sidebar>
            <img src={ sideLogo } alt="Sidebar Logo" />

            <Menu>
              {svgFiles.map((item) => (
                <div>
                  <Svg className="sidebar-svg" SvgComponent={ item } />
                </div>
              ))}
              <LogOut />
            </Menu>
          </Sidebar>
        </Content>
      </Container>
    </>
  );
};

export default Products;
