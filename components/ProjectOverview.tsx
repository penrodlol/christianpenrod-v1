import { MAX, MIN, SIZE } from '@const/breakpoints';
import { Project } from '@interfaces/project';
import ArrowsExpand from '@svg/arrows-expand.svg';
import ExternalLink from '@svg/external-link.svg';
import Image from 'next/image';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './Button';
import { Chip } from './Chip';
import { Divider } from './Divider';
import { Media } from './Media';

const Wrapper = styled.div<HasPreview>(({ hasPreview }) =>
  !hasPreview
    ? ``
    : css`
        display: grid;
        grid-template-columns: 60% 1fr;
        gap: var(--size-9);
        align-items: center;

        ${MAX.LG} {
          grid-template-columns: none;
        }
      `,
);

const Preview = styled.div`
  img:not(:hover) {
    filter: sepia(0.8) !important;
  }
`;

const Info = styled.div<HasPreview>(
  ({ hasPreview }) => css`
    background: ${hasPreview ? 'var(--surface2)' : 'var(--surface1)'};
    box-shadow: var(--shadow-4);
    padding: var(--size-5);
    border-radius: var(--radius-2);
    max-width: var(--size-content-3);
    margin: 0 auto;
    height: 100%;
  `,
);

const EmbeddedPreview = styled.div`
  border-top-left-radius: var(--radius-2);
  border-top-right-radius: var(--radius-2);
  border: solid var(--surface2);
  border-top-width: var(--size-2);
  border-left-width: var(--size-2);
  border-right-width: var(--size-2);
  position: relative;
  cursor: pointer;
  height: var(--size-12);
  margin: calc(var(--size-5) * -1);
  margin-bottom: var(--size-5);

  img {
    border-top-left-radius: var(--radius-2);
    border-top-right-radius: var(--radius-2);
    opacity: 0.8;
    filter: sepia(0.8) !important;
  }

  svg {
    position: absolute;
    right: 0.3rem;
    top: 0.1rem;
    z-index: var(--layer-2);
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
`;

const Header = styled.div<HasPreview>(({ hasPreview }) =>
  hasPreview
    ? ``
    : css`
        ${MIN.LG} {
          height: var(--size-11);
        }
      `,
);

const Title = styled.h2`
  color: var(--text2);
  margin-bottom: var(--size-2);
  --tt-key: project-overview-title;

  /* prettier-ignore */
  @keyframes project-overview-title {
    0%, 60% { font-size: var(--font-size-3); }
    100% { font-size: var(--font-size-4); }
  }
`;

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-2);
  align-items: center;

  svg {
    fill: inherit;
  }
`;

const Tool = styled.div`
  display: flex;
  gap: var(--size-1);
  align-items: center;

  svg {
    transform: translateY(-0.1rem);
  }
`;

const Description = styled.p<HasPreview>(
  ({ hasPreview }) => css`
    font-size: var(--font-size-0);
    line-height: var(--font-lineheight-5);
    margin: var(--size-3) 0;

    ${!hasPreview &&
    `${MIN.LG} {
      height: var(--size-14);
      overflow-y: auto;
    }`}
  `,
);

const Actions = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: var(--size-3);
  margin-top: var(--size-6);

  button {
    font-size: var(--font-size-1);
  }

  @media screen and (max-width: calc(${SIZE.XS} - var(--size-13))) {
    grid-auto-flow: row;
  }
`;

interface HasPreview {
  hasPreview: boolean;
}

export interface ProjectOverviewProps {
  project: Project;
}

export const ProjectOverview: FC<ProjectOverviewProps> = ({ project }) => (
  <Wrapper hasPreview={!!project.preview}>
    {project.preview && (
      <Preview>
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
      </Preview>
    )}
    <Info hasPreview={!!project.preview}>
      {project.preview && (
        <Media lessThan="lg">
          <EmbeddedPreview>
            <ArrowsExpand
              width={35}
              height={35}
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
      <Header hasPreview={!!project.preview}>
        <Title>{project.title}</Title>
        <Tools>
          {project.tools?.map((tool) => (
            <Chip key={tool.id}>
              <Tool>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Navigate to external docs for ${tool.name}.`}
                >
                  {tool.name}
                </a>
                <ExternalLink width={20} height={20} />
              </Tool>
            </Chip>
          ))}
        </Tools>
      </Header>

      <Divider />
      <Description hasPreview={!!project.preview}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta cum
        assumenda, culpa aliquid porro corporis illo ut quod facere
        reprehenderit quo blanditiis debitis possimus ex labore sunt.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
        reiciendis, sint, vitae distinctio accusantium, quisquam aspernatur
        dolorum quas hic aliquid eveniet.
        <br />
        <br />
        Ipsa soluta cum assumenda, culpa aliquid porro corporis illo ut quod
        facere reprehenderit quo blanditiis debitis, quisquam aspernatur dolorum
        quas hic aliquid eveniet.
      </Description>
      <Divider />
      <Actions>
        {project?.hosted && (
          <Button
            aria-label={`Navigate externally to website for the project: ${project.title}.`}
            onClick={() => window.open(project?.hosted, '_blank')}
          >
            Check it out
          </Button>
        )}
        {project?.github && (
          <Button
            aria-label={`Navigate externally to source code for project: ${project.title}.`}
            onClick={() => window.open(project?.github, '_blank')}
          >
            Source Code
          </Button>
        )}
      </Actions>
    </Info>
  </Wrapper>
);
