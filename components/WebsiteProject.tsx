import { Project } from '@interfaces/project';
import Image from 'next/image';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './Button';
import { Chip } from './Chip';
import { Divider } from './Divider';
import { ExternalLink } from './ExternalLink';
import { Media } from './Media';
import { Svg } from './Svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 3rem;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-template-columns: none;
  }
`;

const Preview = styled.div`
  display: block;
  margin: 0 auto;
`;

const Info = styled.div(
  ({ theme }) => css`
    background: ${theme.background.base};
    box-shadow: ${theme.shadow.base};
    padding: 1.5rem;
    border-radius: 0.5rem;
    max-width: 60ch;
    margin: 0 auto;
  `,
);

const EmbeddedPreview = styled.div(
  ({ theme }) => css`
    position: relative;
    cursor: pointer;
    height: 10rem;
    margin: -1.5rem;
    margin-bottom: 1.5rem;

    img {
      border-top-left-radius: ${theme.rounded.base};
      border-top-right-radius: ${theme.rounded.base};
      opacity: 0.6;
    }

    svg {
      position: absolute;
      right: 0.3rem;
      top: 0.1rem;
      z-index: 10;
      visibility: hidden;
    }

    &:hover {
      img {
        opacity: 0.7;
      }

      svg {
        visibility: visible;
      }
    }
  `,
);

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.7rem;
  align-items: center;
  font-size: 0.8em;

  svg {
    fill: inherit;
  }
`;

const Description = styled.p`
  font-size: 0.78em;
  line-height: 1.8em;
  margin: 1rem 0;
`;

const Actions = styled.div`
  font-size: 0.8em;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export interface WebsiteProjectProps {
  project: Project;
}

export const WebsiteProject: FC<WebsiteProjectProps> = ({ project }) => {
  return (
    <Wrapper>
      <Preview>
        <Media greaterThanOrEqual="lg">
          <Image
            src={project.preview as string}
            alt="Preview"
            priority
            placeholder="blur"
            blurDataURL={project.preview as string}
            layout="intrinsic"
            width={1920}
            height={1440}
            quality={100}
          />
        </Media>
      </Preview>
      <Info>
        <Media lessThan="lg">
          <EmbeddedPreview>
            <Svg
              name="arrows-expand"
              aria-label={`Show full preview of project: ${project.title}.`}
            />
            <Image
              src="/img/device.webp"
              alt="Preview"
              priority
              placeholder="blur"
              blurDataURL="/img/device.webp"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </EmbeddedPreview>
        </Media>

        <h2>{project.title}</h2>
        <Tools>
          {project.tools?.map((tool) => (
            <Chip key={tool.id}>
              <ExternalLink
                href={tool.url}
                aria-label={`Navigate to external docs for ${tool.name}.`}
              >
                {tool.name}
              </ExternalLink>
            </Chip>
          ))}
        </Tools>
        <Divider />
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta
          cum assumenda, culpa aliquid porro corporis illo ut quod facere
          reprehenderit quo blanditiis debitis possimus ex labore sunt.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
          reiciendis, sint, vitae distinctio accusantium, quisquam aspernatur
          dolorum quas hic aliquid eveniet.
          <br />
          <br />
          Ipsa soluta cum assumenda, culpa aliquid porro corporis illo ut quod
          facere reprehenderit quo blanditiis debitis, quisquam aspernatur
          dolorum quas hic aliquid eveniet.
        </Description>
        <Divider />
        <Actions>
          {project.external?.hosted && (
            <Button
              aria-label={`Navigate externally to website for the project: ${project.title}.`}
              onClick={() => window.open(project.external?.hosted, '_blank')}
            >
              Check it out
            </Button>
          )}
          {project.external?.github && (
            <Button
              aria-label={`Navigate externally to source code for project: ${project.title}.`}
              onClick={() => window.open(project.external?.github, '_blank')}
            >
              Source Code
            </Button>
          )}
        </Actions>
      </Info>
    </Wrapper>
  );
};
