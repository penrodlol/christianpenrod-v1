import { FC, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const OverlayContent = styled.div`
  background: var(--overlay);
  position: fixed;
  inset: 0;
  z-index: 40;
  backdrop-filter: blur(9px);
`;

const RemoveBodyOverflow = createGlobalStyle`
  body { overflow: hidden; }
`;

export interface OverlayProps {
  show: boolean;
  onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = (props) => {
  useEffect(() => {}, [props.show]);

  return (
    <>
      {props.show && (
        <div onClick={props.onClick}>
          <RemoveBodyOverflow />
          <OverlayContent>{props.children}</OverlayContent>
        </div>
      )}
    </>
  );
};
