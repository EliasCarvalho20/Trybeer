import React, { FC } from 'react';

import { Container, Menu } from './style';
import Svg from '../Svg';
import sideLogo from '../../assets/sidebar/logo.png';
import {
  Dashboard, Discount, Home, LogOut, Message, Notification, Settings,
} from '../../assets/icons';

const Sidebar: FC = () => {
  const svgFiles = [Home, Discount, Dashboard, Message, Notification, Settings];

  return (
    <>
      <Container>
        <img src={ sideLogo } alt="Sidebar Logo" />

        <Menu>
          {svgFiles.map((item) => (
            <div>
              <Svg className="sidebar-svg" SvgComponent={ item } />
            </div>
          ))}
          <LogOut />
        </Menu>
      </Container>
    </>
  );
};

export default Sidebar;
