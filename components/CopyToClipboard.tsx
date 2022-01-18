import Check from '@svg/check.svg';
import Clipboard from '@svg/clipboard.svg';
import { FC } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Wrapper = styled(Button)`
  svg {
    &,
    &:hover {
      fill: transparent !important;
      stroke: var(--text1);
    }
  }
`;

export interface CopyToClipboardProps {
  copyTarget: HTMLElement | null | undefined;
}

export const CopyToClipboard: FC<CopyToClipboardProps> = ({ copyTarget }) => {
  async function copyToClipboard() {
    if (!copyTarget) return;

    navigator.clipboard.writeText(copyTarget.innerText);
  }

  return (
    <Wrapper asIcon>
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
