import { ButtonHTMLAttributes, FC } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Svg, SvgName } from './Svg';

export type ButtonStatus = 'primary' | 'secondary' | 'cta';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ButtonStatus;
  icon?: SvgName;
  iconSize?: number;
}

const Wrapper = styled.button<ButtonProps>(({ status, theme, icon }) => {
  let background!: string;
  let backgroundHover!: string;
  let iconStyles!: FlattenSimpleInterpolation;

  if (icon) {
    iconStyles = css`
      display: flex;
      align-items: center;

      &:hover:not(:active, :disabled) {
        > svg {
          fill: ${theme.primary.hover};
        }
      }
    `;
  } else
    switch (status) {
      case 'secondary':
        background = '';
        backgroundHover = '';
        break;
      case 'cta':
        background = theme.tertiary.base;
        backgroundHover = theme.tertiary.hover;
        break;
      default:
        background = theme.basic.base;
        backgroundHover = theme.basic.hover;
        break;
    }

  return css`
    border-radius: ${theme.rounded.base};
    box-shadow: ${icon ? 0 : theme.shadow.base};
    padding: ${icon ? 0 : '0.65rem 1.6rem'};
    border: none;
    cursor: pointer;
    font-size: 1.15em;
    font-weight: 600;
    white-space: nowrap;
    background: ${background ?? 'transparent'};

    ${iconStyles ?? ''};

    &:disabled {
      cursor: not-allowed;
    }

    &:hover:not(:active, :disabled) {
      background: ${backgroundHover ?? 'transparent'};
    }
  `;
});

export const Button: FC<ButtonProps> = (props) => (
  <Wrapper {...props}>
    {props.icon ? (
      <Svg
        name={props.icon}
        width={props.iconSize ?? 30}
        height={props.iconSize ?? 30}
      />
    ) : (
      props.children
    )}
  </Wrapper>
);
