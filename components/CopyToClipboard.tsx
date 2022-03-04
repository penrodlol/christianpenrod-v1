import Clipboard from '@svg/clipboard.svg';
import { FC, useState } from 'react';
import { PlayState, Timeline, Tween } from 'react-gsap';
import styled from 'styled-components';
import { Button } from './Button';

const Wrapper = styled.div`
  position: relative;
  width: 27px;
  height: 27px;

  #clipboard,
  #check {
    position: absolute;
    inset: 0;
  }

  #clipboard {
    z-index: var(--layer-2);

    &:hover svg {
      stroke: var(--text-1);
    }
  }

  #check {
    opacity: 0;
    stroke: hsl(120deg 49% 38%);
    z-index: var(--layer-1);
  }

  svg {
    fill: transparent !important;
    stroke: var(--text-2);
  }
`;

export interface CopyToClipboardProps {
  text: string | undefined;
}

export const CopyToClipboard: FC<CopyToClipboardProps> = ({ text }) => {
  const [playState, setPlayState] = useState(PlayState.pause);

  async function copyToClipboard() {
    if (!text) return;

    await navigator.clipboard.writeText(text);

    setPlayState(PlayState.play);
  }

  return (
    <Wrapper>
      <Timeline
        playState={playState}
        onComplete={() => setPlayState(PlayState.reverse)}
        target={
          <Button id="clipboard" asIcon noAnimate>
            <Clipboard
              aria-label="Copy to clipboard"
              width={27}
              height={27}
              opacity={0.5}
              cursor="pointer"
              onClick={copyToClipboard}
            />
          </Button>
        }
      >
        <Tween
          from={{ opacity: 1, transform: 'scale(1)' }}
          to={{ opacity: 0, transform: 'scale(0)' }}
          duration={0.2}
        />
        <Tween
          from={{ opacity: 0, transform: 'scale(0)' }}
          to={{ opacity: 1, transform: 'scale(1)' }}
          duration={0.2}
        >
          <svg
            id="check"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </Tween>
        <Tween duration={0.5} />
      </Timeline>
    </Wrapper>
  );
};
