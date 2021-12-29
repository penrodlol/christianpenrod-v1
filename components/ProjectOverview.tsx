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

const Wrapper = styled.div<ProjectOverviewProps>(
  ({ theme, project }) => css`
    ${project.preview &&
    `
      display: grid;
      grid-template-columns: 60% 1fr;
      gap: 3rem;
      align-items: center;

      @media screen and (max-width: ${theme.breakpoint.lg}) {
        grid-template-columns: none;
      }`}
  `,
);

const Preview = styled.div`
  display: block;
  margin: 0 auto;

  img:not(:hover) {
    filter: sepia(0.8) !important;
  }
`;

const Info = styled.div<ProjectOverviewProps>(
  ({ theme, project }) => css`
    background: ${project.preview
      ? theme.background.base
      : theme.background.light};
    box-shadow: ${theme.shadow.base};
    padding: 1.5rem;
    border-radius: 0.5rem;
    max-width: 60ch;
    margin: 0 auto;
    height: 100%;
  `,
);

const EmbeddedPreview = styled.div(
  ({ theme }) => css`
    border-top-left-radius: ${theme.rounded.base};
    border-top-right-radius: ${theme.rounded.base};
    border: solid ${theme.background.base};
    border-width: 0.4rem 0.3rem 0 0.3rem;
    position: relative;
    cursor: pointer;
    height: 10rem;
    margin: -1.5rem;
    margin-bottom: 1.5rem;

    img {
      border-top-left-radius: ${theme.rounded.base};
      border-top-right-radius: ${theme.rounded.base};
      opacity: 0.8;
      filter: sepia(0.8) !important;
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
        opacity: 0.9;
      }

      svg {
        visibility: visible;
      }
    }
  `,
);

const Header = styled.div<ProjectOverviewProps>(
  ({ theme, project }) => css`
    ${!project.preview &&
    `@media screen and (min-width: ${theme.breakpoint.lg}) {
      height: 7rem;
    }`}
  `,
);

const Title = styled.h2`
  --tt-key: project-card-title;

  /* prettier-ignore */
  @keyframes project-card-title {
  0%, 60% { font-size: 1.3em; }
  100% { font-size: 1.5em; }
}
`;

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

const Description = styled.p<ProjectOverviewProps>(
  ({ theme, project }) => css`
    font-size: 0.78em;
    line-height: 1.8em;
    margin: 1rem 0;

    ${!project.preview &&
    `@media screen and (min-width: ${theme.breakpoint.lg}) {
      height: 25rem;
      overflow-y: auto;
    }`}
  `,
);

const Actions = styled.div`
  font-size: 0.8em;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoint.xs} - 15em)) {
    grid-auto-flow: row;
  }
`;

export interface ProjectOverviewProps {
  project: Project;
}

export const ProjectOverview: FC<ProjectOverviewProps> = ({ project }) => {
  return (
    <Wrapper project={project}>
      <Preview>
        {project.preview && (
          <Media greaterThanOrEqual="lg">
            <Image
              src={project.preview}
              alt="Preview"
              priority
              placeholder="blur"
              blurDataURL={project.preview}
              layout="intrinsic"
              width={1920}
              height={1440}
              quality={100}
            />
          </Media>
        )}
      </Preview>
      <Info project={project}>
        {project.preview && (
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
        )}
        <Header project={project}>
          <Title>{project.title}</Title>
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
        </Header>

        <Divider />
        <Description project={project}>
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
