import React, { FC } from 'react';

import { Container, Menu } from './style';
import Svg from '../Svg';
import sideLogo from '../../assets/sidebar/logo.png';

const Sidebar: FC = () => {
  const svgFiles = ['Home', 'Discount', 'Dashboard', 'Message', 'Notification', 'Settings'];

  return (
    <>
      <Container>
        <img src={ sideLogo } alt="Sidebar Logo" />

        <Menu>
          {svgFiles.map((item) => (
            <div>
              <Svg svgName={ item } />
            </div>
          ))}
          <Svg svgName="LogOut" />
        </Menu>
      </Container>
    </>
  );
};

export default Sidebar;
