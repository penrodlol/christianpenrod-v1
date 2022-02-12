import { Anchor } from '@components/Anchor';
import { FC } from 'react';

interface ProfileLinkProps {
  url: string;
  name: string;
}

const ProfileLink: FC<ProfileLinkProps> = ({ url, name }) => (
  <Anchor
    underline="hover"
    href={url}
    target="_blank"
    rel="nofollow noreferrer"
  >
    {name}
  </Anchor>
);

export const NxLink = () => <ProfileLink name="Nx" url="https://nx.dev/" />;

export const AngularLink = () => (
  <ProfileLink name="Angular" url="https://angular.io/" />
);

export const NextjsLink = () => (
  <ProfileLink name="Nextjs" url="https://nextjs.org/" />
);

export const TailwindCSSLink = () => (
  <ProfileLink name="tailwindcss" url="https://tailwindcss.com/" />
);

export const StyledComponentsLink = () => (
  <ProfileLink name="styled-components" url="https://styled-components.com/" />
);

export const MaterialDesignLink = () => (
  <ProfileLink name="Material Design" url="https://material.io/" />
);
