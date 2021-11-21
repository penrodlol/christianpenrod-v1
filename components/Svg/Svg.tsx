import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  SVGAttributes,
} from 'react';
import { SvgName, SVGS } from './svgs';

export interface SvgProps extends SVGAttributes<SVGElement> {
  name: SvgName;
}

const SvgComponent = (
  props: PropsWithChildren<SvgProps>,
  ref: ForwardedRef<SVGSVGElement>,
) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    ref={ref}
    {...props}
  >
    <path {...SVGS.get(props.name)} />
    <title>{props.name}</title>
  </svg>
);

export const Svg = forwardRef(SvgComponent);
