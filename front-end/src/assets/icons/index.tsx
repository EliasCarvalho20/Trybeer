import React from 'react';
import { SvgComponent } from './interface';

import { ReactComponent as AboutUs } from './About-Us.svg';
import { ReactComponent as Add } from './Add.svg';
import { ReactComponent as ArrowDown } from './Arrow-Down.svg';
import { ReactComponent as ArrowUp } from './Arrow-Up.svg';
import { ReactComponent as Back } from './Back.svg';
import { ReactComponent as Coin } from './Coin.svg';
import { ReactComponent as Edit } from './Edit.svg';
import { ReactComponent as Dashboard } from './Dashboard.svg';
import { ReactComponent as Discount } from './Discount.svg';
import { ReactComponent as Home } from './Home.svg';
import { ReactComponent as LogOut } from './Log-Out.svg';
import { ReactComponent as Message } from './Message.svg';
import { ReactComponent as Notification } from './Notification.svg';
import { ReactComponent as Security } from './Security.svg';
import { ReactComponent as Settings } from './Settings.svg';
import { ReactComponent as Trash } from './Trash.svg';

const SvgDictionary: SvgComponent = {
  AboutUs: <AboutUs />,
  Add: <Add />,
  ArrowDown: <ArrowDown />,
  ArrowUp: <ArrowUp />,
  Back: <Back />,
  Coin: <Coin />,
  Edit: <Edit />,
  Dashboard: <Dashboard />,
  Discount: <Discount />,
  Home: <Home />,
  LogOut: <LogOut />,
  Message: <Message />,
  Notification: <Notification />,
  Security: <Security />,
  Settings: <Settings />,
  Trash: <Trash />,
};

export default SvgDictionary;
