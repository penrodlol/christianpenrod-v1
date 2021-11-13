import { PropsWithChildren, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export type Breakpoint =
  | 'min-sm'
  | 'min-md'
  | 'min-lg'
  | 'min-xl'
  | 'min-2xl'
  | 'max-sm'
  | 'max-md'
  | 'max-lg'
  | 'max-xl'
  | 'max-2xl';

export interface MediaQueryProps {
  at: Breakpoint;
}

export const MediaQuery = (props: PropsWithChildren<MediaQueryProps>) => {
  const [hyrdated, setHydrated] = useState(false);
  const mediaMap = new Map<Breakpoint, boolean>()
    .set('min-sm', useMediaQuery({ minWidth: 641 }))
    .set('min-md', useMediaQuery({ minWidth: 769 }))
    .set('min-lg', useMediaQuery({ minWidth: 1025 }))
    .set('min-xl', useMediaQuery({ minWidth: 1281 }))
    .set('min-2xl', useMediaQuery({ minWidth: 1537 }))
    .set('max-sm', useMediaQuery({ maxWidth: 640 }))
    .set('max-md', useMediaQuery({ maxWidth: 768 }))
    .set('max-lg', useMediaQuery({ maxWidth: 1024 }))
    .set('max-xl', useMediaQuery({ maxWidth: 1280 }))
    .set('max-2xl', useMediaQuery({ maxWidth: 1536 }));

  useEffect(() => setHydrated(true), []);

  return <>{hyrdated && mediaMap.get(props.at) && props.children}</>;
};
