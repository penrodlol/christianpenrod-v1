import { MAX } from '@const/breakpoints';
import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
  *::-webkit-scrollbar {
    width: 0.6em;
  
    &:horizontal {
      height: 0.3em;
    }
  
    &-track {
      box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
    }
  
    &-thumb {
      background: linear-gradient(
        180deg,
        var(--brand1),
        var(--guava1)
      );
      border-radius: 0.25em;
      
      &:horizontal {
        background: var(--moon1);
      }
    }
  
    ${MAX.SM} {
      width: 0.4em;
    }
  }
`;

export const ScrollbarStyles = () => <Styles />;
