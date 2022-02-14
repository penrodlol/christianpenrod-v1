import { Anchor, AnchorProps } from '@components/Anchor';
import { FC } from 'react';

interface ProfileLinkProps extends AnchorProps {
  name: string;
}

const ProfileLink: FC<ProfileLinkProps> = ({ name, ...props }) => (
  <Anchor
    {...props}
    underline="hover"
    target="_blank"
    rel="nofollow noreferrer"
  >
    {name}
  </Anchor>
);

export const NxLink = () => (
  <ProfileLink
    name="Nx"
    href="https://nx.dev/"
    aria-label="Navigate externally to Nx documentation."
  />
);

export const AngularLink = () => (
  <ProfileLink
    name="Angular"
    href="https://angular.io/"
    aria-label="Navigate externally to Angular documentation."
  />
);

export const NextjsLink = () => (
  <ProfileLink
    name="Nextjs"
    href="https://nextjs.org/"
    aria-label="Navigate externally to Next.js documentation."
  />
);

export const TailwindCSSLink = () => (
  <ProfileLink
    name="tailwindcss"
    href="https://tailwindcss.com/"
    aria-label="Navigate externally to tailwindcss documentation."
  />
);

export const StyledComponentsLink = () => (
  <ProfileLink
    name="styled-components"
    href="https://styled-components.com/"
    aria-label="Navigate externally to styled-components documentation."
  />
);

export const MaterialDesignLink = () => (
  <ProfileLink
    name="Material Design"
    href="https://material.io/"
    aria-label="Navigate externally to Material Design documentation."
  />
);
