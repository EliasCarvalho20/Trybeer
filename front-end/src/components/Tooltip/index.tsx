import React, { FC } from 'react';

import { TooltipProps } from './interface';
import { Container } from './styles';

const Tooltip: FC<TooltipProps> = ({ title, className, children }) => (
  <Container className={ className }>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
