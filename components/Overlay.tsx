import { PropsWithChildren, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const OverlayContent = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: hsla(236, 22%, 15%, 0.663);
  backdrop-filter: blur(9px);
`;

const RemoveBodyOverflow = createGlobalStyle`
  body { overflow: hidden; }
`;

export interface OverlayProps {
  show: boolean;
}

export const Overlay = (props: PropsWithChildren<OverlayProps>) => {
  useEffect(() => {}, [props.show]);

  return (
    <div>
      {props.show && (
        <>
          <RemoveBodyOverflow />
          <OverlayContent>{props.children}</OverlayContent>
        </>
      )}
    </div>
  );
};
