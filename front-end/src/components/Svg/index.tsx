import React, { FC } from 'react';

import { SvgInterface } from './interface';
import SvgDictionary from '../../assets/icons';

const Svg: FC<SvgInterface> = ({ svgName }) => (
  <>
    {SvgDictionary[svgName]}
  </>
);

export default Svg;
