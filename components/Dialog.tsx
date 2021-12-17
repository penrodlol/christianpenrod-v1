import { FC, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Button } from './Button';
import { Svg } from './Svg';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  background: ${({ theme }) => theme.background.heavy};
  border-radius: ${({ theme }) => theme.rounded.base};
  box-shadow: ${({ theme }) => theme.shadow.base};
  position: absolute;
  top: 25%;
  left: 1.25rem;
  right: 1.25rem;
  margin: 0 auto;
`;

const Header = styled.div`
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
  border: none;
  background: transparent;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  padding: 1rem;
`;

const ActiveDialogStyles = createGlobalStyle`
  #hamburger { display: none; }
`;

export interface DialogProps {
  title: string;
  open: boolean;
  closeAria: string;
  onClose: () => void;
  primary?: {
    label: string;
    aria: string;
    disabled?: boolean;
  };
  secondary?: {
    label: string;
    aria: string;
  };
  onCancel?: () => void;
  onSubmit?: () => void;
}

export const Dialog: FC<DialogProps> = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(props.open), [props.open]);

  return (
    <>
      {open && <ActiveDialogStyles />}
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{props.title}</Title>
          <Close aria-label={props.closeAria} onClick={props.onClose}>
            <Svg name="close" fill="var(--text-base)" />
          </Close>
        </Header>
        <Content>{props.children}</Content>
        <Footer>
          {props.secondary && (
            <Button
              status="secondary"
              aria-label={props.secondary.aria}
              onClick={props.onCancel}
            >
              {props.secondary?.label}
            </Button>
          )}
          {props.primary && (
            <Button
              status="primary"
              aria-label={props.primary.aria}
              disabled={props.primary.disabled}
              onClick={props.onSubmit}
            >
              {props.primary?.label}
            </Button>
          )}
        </Footer>
      </Wrapper>
    </>
  );
};
