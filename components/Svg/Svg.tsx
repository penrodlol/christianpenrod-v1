import { PropsWithChildren, SVGAttributes } from 'react';
import { SvgName, SVGS } from './svgs';

export interface SvgProps extends SVGAttributes<SVGElement> {
  name: SvgName;
}

export const Svg = (props: PropsWithChildren<SvgProps>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    {...props}
  >
    <path {...SVGS.get(props.name)} />
    <title>{props.name}</title>
  </svg>
);
