import { Button } from '@components/Button';
import { GridSurface } from '@components/GridSurface';
import { Media } from '@components/Media';
import { PageHead } from '@components/PageHead';
import { MAX } from '@const/breakpoints';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: max-content;
  max-width: 100%;
  min-height: 70vh;
  margin: 0 auto;
  padding-bottom: var(--size-7);
  padding-left: var(--size-3);
  padding-right: var(--size-3);
  text-align: center;

  ${MAX.LG} {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-bottom: var(--size-10);
  }

  ${MAX.SM} {
    gap: var(--size-5);
  }
`;

const Message = styled.p`
  --_404-message-max-width: 25ch;
  --tt-key: _404-message;

  max-width: var(--_404-message-max-width);
  margin: 0 auto;
  margin-bottom: var(--size-6);

  /* prettier-ignore */
  @keyframes _404-message {
    0%, 20% { font-size: var(--font-size-4); }
    100% { font-size: var(--font-size-7); }
  }
`;

const BackHome = styled.div`
  ${MAX.SM} {
    button {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const Custom404 = () => {
  const router = useRouter();

  return (
    <>
      <PageHead page="404" />
      <GridSurface>
        <Wrapper>
          <Image
            src="/img/404.webp"
            alt="404 Illustration"
            priority
            quality={100}
            width={853}
            height={596}
          />
          <Media lessThan="lg">
            <div>
              <Message>
                The page you&apos;re looking for cannot be found.
              </Message>
              <BackHome>
                <Button
                  color="cta"
                  aria-label="Navigate internally to home"
                  onClick={() => router.push('/')}
                >
                  Back Home
                </Button>
              </BackHome>
            </div>
          </Media>
        </Wrapper>
      </GridSurface>
    </>
  );
};

export default Custom404;
