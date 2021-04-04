import React, { FC } from 'react';

import { SideBar, Menu } from './style';
import Svg from '../Svg';
import sideLogo from '../../assets/sidebar/logo.png';
import {
  Dashboard, Discount, Home, LogOut, Message, Notification, Settings,
} from '../../assets/icons';

const Sidebar: FC = () => {
  const svgFiles = [Home, Discount, Dashboard, Message, Notification, Settings];

  return (
    <>
      <SideBar>
        <img src={ sideLogo } alt="Sidebar Logo" />

        <Menu>
          {svgFiles.map((item) => (
            <div>
              <Svg className="sidebar-svg" SvgComponent={ item } />
            </div>
          ))}
          <LogOut />
        </Menu>
      </SideBar>
    </>
  );
};

export default Sidebar;
