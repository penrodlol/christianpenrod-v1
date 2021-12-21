import { Project } from '@interfaces/project';
import Image from 'next/image';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Chip } from './Chip';
import { Divider } from './Divider';
import { ExternalLink } from './ExternalLink';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 2rem;
`;

const Preview = styled.div`
  display: block;
`;

const Info = styled.div(
  ({ theme }) => css`
    background: ${theme.background.base};
    box-shadow: ${theme.shadow.base};
    padding: 1.5rem;
    border-radius: 0.5rem;
    max-width: 50ch;
    margin: 0 auto;
  `,
);

export const Description = styled.p`
  font-size: 0.78em;
  line-height: 1.8em;
  margin: 1rem 0;
`;

export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  align-items: center;
  font-size: 0.8em;
`;

export interface WebsiteProjectProps {
  project: Project;
}

export const WebsiteProject: FC<WebsiteProjectProps> = ({ project }) => {
  return (
    <Wrapper>
      <Preview>
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
      </Preview>
      <Info>
        <h2>{project.title}</h2>
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
        <Tools>
          {project.tools?.map((tool) => (
            <ExternalLink
              key={tool.id}
              href={tool.url}
              aria-label={`Navigate to external docs for ${tool.name}.`}
            >
              <Chip>#{tool.name}</Chip>
            </ExternalLink>
          ))}
        </Tools>
      </Info>
    </Wrapper>
  );
};
