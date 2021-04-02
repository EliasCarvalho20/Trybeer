import React, { FC } from 'react';

interface SvgInterface {
 className: string;
 SvgComponent: FC
}

const Svg: FC<SvgInterface> = ({ SvgComponent }) => (<SvgComponent />);

export default Svg;
