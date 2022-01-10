import * as DialogPrimitive from '@radix-ui/react-dialog';
import gsap from 'gsap';
import { FC, useEffect, useRef } from 'react';
import { useRefElement } from 'rooks';
import styled, { css } from 'styled-components';
import { Button, ButtonProps } from './Button';

const Overlay = styled(DialogPrimitive.Overlay)`
  background: ${({ theme }) => theme.background.blur};
  backdrop-filter: blur(4px);
  position: fixed;
  inset: 0;
  z-index: 50;
`;

const Content = styled(DialogPrimitive.Content)(
  ({ theme }) => css`
    max-width: ${theme.breakpoint.sm};
    background: ${theme.background.light};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 51;
    margin: 0 auto;
  `,
);

const Header = styled(DialogPrimitive.Title)`
  padding: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto max-content;
  align-items: center;
  justify-items: space-between;
`;

const Body = styled.div`
  padding: 1.5rem;
`;

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  padding: 1rem 1rem 1.5rem 1rem;
`;

export interface DialogContentProps extends DialogPrimitive.DialogContentProps {
  primary: ButtonProps & { label: string };
  secondary?: ButtonProps & { label: string };
}

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent: FC<DialogContentProps> = ({
  children,
  ...props
}) => {
  const [contentRef, contentEl] = useRefElement<HTMLDivElement>();
  const [overlayRef, overlayEl] = useRefElement<HTMLDivElement>();
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!contentEl && !overlayEl) return;

    tl.current = gsap.timeline();

    tl.current
      ?.from(overlayEl, {
        autoAlpha: 0,
        delay: 0.05,
        duration: 0.2,
      })
      .from(
        contentEl,
        {
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.5,
          ease: 'back.out(3)',
        },
        0.15,
      );

    return () => {
      tl.current?.kill();
    };
  });

  return (
    <DialogPrimitive.Portal>
      <Overlay ref={overlayRef} />
      <Content ref={contentRef} {...props}>
        <Header>
          {props.title}
          <DialogPrimitive.DialogClose asChild>
            <Button icon="close" />
          </DialogPrimitive.DialogClose>
        </Header>
        <Body>{children}</Body>
        <Footer>
          {props.secondary && (
            <DialogPrimitive.Close asChild>
              <Button status="secondary" {...props.secondary}>
                {props.secondary.label}
              </Button>
            </DialogPrimitive.Close>
          )}
          <Button status="primary" {...props.primary}>
            {props.primary.label}
          </Button>
        </Footer>
      </Content>
    </DialogPrimitive.Portal>
  );
};
