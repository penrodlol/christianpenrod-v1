import { Media } from '@components/Media';
import { SocialLinks } from '@components/SocialLinks';
import { MIN } from '@const/breakpoints';
import styled from 'styled-components';
import { HeroBlob } from './HeroBlob';
import { HeroMessage } from './HeroMessage';

const Wrapper = styled.div`
  ${MIN.MD} {
    display: grid;
    grid-template-columns: 1fr 40%;
    padding-top: 5%;
    gap: var(--size-10);
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: max-content;

  > :last-child {
    align-self: end;
    padding-top: var(--size-7);
    padding-bottom: var(--size-5);
  }

  ${MIN.MD} {
    display: grid;
    justify-items: space-between;
  }
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <HeroMessage />
        <SocialLinks />
      </Content>
      <Media greaterThan="sm">
        <HeroBlob />
      </Media>
    </Wrapper>
  );
};
