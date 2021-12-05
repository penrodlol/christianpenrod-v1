import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Overlay } from './Overlay';
import { Svg } from './Svg';

const Wrapper = styled.div`
  max-width: var(--sm);
  background: var(--basic-5);
  border-radius: var(--rounded-2);
  margin: auto;
  margin-top: 10%;
`;

const Header = styled.div`
  border-bottom: solid 0.2rem var(--basic-4);
  padding: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto max-content;
  align-items: center;
  justify-items: space-between;
`;

const Title = styled.h2``;

const Close = styled.button`
  cursor: pointer;
  border-radius: var(--rounded-0);
  border: none;
  background: transparent;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

export interface DialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

export const Dialog: FC<DialogProps> = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(props.open), [props.open]);

  return (
    <Overlay show={open} onClick={props.onClose}>
      <Wrapper>
        <Header>
          <Title>{props.title}</Title>
          <Close aria-label="Close dialog" onClick={props.onClose}>
            <Svg name="close" fill="var(--basic-1)" />
          </Close>
        </Header>
        <Content>{props.children}</Content>
      </Wrapper>
    </Overlay>
  );
};
