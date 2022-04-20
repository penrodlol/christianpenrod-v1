import { MOTION } from '@const/motion';
import * as TabsPrimative from '@radix-ui/react-tabs';
import { FC, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(TabsPrimative.Root)`
  background: var(--surface-2);
  box-shadow: var(--shadow-3);
  border-radius: var(--radius-2);
  margin: var(--size-5) 0;
`;

const TabsList = styled(TabsPrimative.TabsList)`
  display: flex;
  flex-shrink: 0;
  box-shadow: var(--shadow-1);
  overflow-x: auto;

  [data-state='active'] {
    color: var(--text-1);

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: var(--layer-2);
      height: var(--size-1);
      border-radius: var(--radius-2);
      background: var(--brand-1);
    }
  }

  ${MOTION.NO_PREFERENCE} {
    &[data-is-forward='true'] {
      [data-state='active']:after {
        animation: var(--animation-slide-in-right);
        animation-duration: 0.2s;
      }
    }

    &[data-is-forward='false'] {
      [data-state='active']:after {
        animation: var(--animation-slide-in-left);
        animation-duration: 0.2s;
      }
    }
  }
`;

const Trigger = styled(TabsPrimative.Trigger)`
  all: unset;
  background: var(--surface-1);
  color: var(--text-2);
  cursor: pointer;
  flex: 1;
  padding: var(--size-1) var(--size-3);
  position: relative;
  text-align: center;

  &:first-child {
    border-top-left-radius: var(--radius-2);
  }

  &:last-child {
    border-top-right-radius: var(--radius-2);
  }

  &:hover:not([data-state='active']) {
    color: var(--text-1);
  }
`;

const Content = styled(TabsPrimative.Content)`
  padding: var(--size-4);
  font-size: var(--font-size-1);

  > *:not(span[size]) {
    margin: 0 !important;
  }
`;

export interface TabProps extends TabsPrimative.TabsContentProps {
  value: string;
}

export const Tab: FC<TabProps> = ({ children, ...props }) => (
  <Content {...props}>{children}</Content>
);

export interface TabsProps extends TabsPrimative.TabsProps {
  tabsAria: string;
  values: Array<string>;
}

export const Tabs: FC<TabsProps> = ({
  tabsAria,
  values,
  children,
  ...props
}) => {
  const [defaultValue] = useState(props.defaultValue || values[0]);
  const [lastSelected, setLastSelected] = useState(defaultValue);
  const [isForward, setIsForward] = useState(false);

  function handleValueChange(value: string) {
    const currIdx = values.findIndex((v) => v === lastSelected);
    const nextIdx = values.findIndex((v) => v === value);

    setIsForward(currIdx < nextIdx);
    setLastSelected(value);
  }

  return (
    <Wrapper
      {...props}
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
    >
      <TabsList aria-label={tabsAria} data-is-forward={isForward}>
        {values.map((value) => (
          <Trigger key={value} value={value}>
            {value}
          </Trigger>
        ))}
      </TabsList>
      {children}
    </Wrapper>
  );
};
