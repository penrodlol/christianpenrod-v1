import Check from '@svg/check.svg';
import Clipboard from '@svg/clipboard.svg';
import { FC } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Wrapper = styled(Button)`
  svg {
    fill: transparent !important;
    stroke: var(--text-2);

    &:hover:not(:active) {
      stroke: var(--text-1);
    }
  }
`;

export interface CopyToClipboardProps {
  text: string | undefined;
}

export const CopyToClipboard: FC<CopyToClipboardProps> = ({ text }) => {
  async function copyToClipboard() {
    if (!text) return;

    navigator.clipboard.writeText(text);
  }

  return (
    <Wrapper asIcon noAnimate>
      <Clipboard
        aria-label="Copy to clipboard"
        width={27}
        height={27}
        opacity={0.5}
        cursor="pointer"
        onClick={copyToClipboard}
      />
      <Check visibility="hidden" width={30} height={30} opacity={0.5} />
    </Wrapper>
  );
};
