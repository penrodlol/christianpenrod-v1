import { SIZE } from '@const/breakpoints';
import { MOTION } from '@const/motion';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import Close from '@svg/close.svg';
import { FC } from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from './Button';

const Overlay = styled(DialogPrimitive.Overlay)`
  background: var(--overlay);
  backdrop-filter: blur(10px);
  position: fixed;
  inset: 0;
  opacity: 0;
  z-index: var(--layer-5);
  animation: var(--animation-fade-in) forwards;
  animation-duration: 30ms;
`;

const Content = styled(DialogPrimitive.Content)`
  max-width: ${SIZE.SM};
  width: 90%;
  background: var(--surface2);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-4);
  position: fixed;
  margin: 0 auto;
  z-index: var(--layer-important);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${MOTION.NO_PREFERENCE} {
    @keyframes scale-up {
      from {
        transform: translate(-50%, -48%) scale(0.96);
      }
      to {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    opacity: 0;
    animation: var(--animation-fade-in) forwards, scale-up;
    animation-timing-function: var(--ease-squish-1);
    animation-duration: 300ms;
    animation-delay: 35ms;
  }
`;

const Header = styled.div`
  padding: var(--size-3);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto max-content;
  align-items: center;
  justify-items: space-between;
`;

const Title = styled(DialogPrimitive.Title)`
  color: var(--text2);
  font-size: var(--font-size-5);
`;

const Body = styled.div`
  padding: var(--size-5);
`;

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: end;
  gap: var(--size-3);
  padding: var(--size-3);
  padding-bottom: var(--size-5);
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
  return (
    <DialogPrimitive.Portal>
      <Overlay />
      <Content {...props}>
        <Header>
          <Title>{props.title}</Title>
          <DialogPrimitive.DialogClose asChild>
            <Button asIcon>
              <Close width={35} height={35} />
            </Button>
          </DialogPrimitive.DialogClose>
        </Header>
        <Body>{children}</Body>
        <Footer>
          {props.secondary && (
            <DialogPrimitive.Close asChild>
              <Button color="basic" {...props.secondary}>
                {props.secondary.label}
              </Button>
            </DialogPrimitive.Close>
          )}
          <Button color="basic" {...props.primary}>
            {props.primary.label}
          </Button>
        </Footer>
      </Content>
    </DialogPrimitive.Portal>
  );
};
