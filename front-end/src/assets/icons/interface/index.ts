import { FunctionComponent, ReactComponentElement } from 'react';

export interface SvgComponent {
  [key: string]: ReactComponentElement<FunctionComponent>;
}
