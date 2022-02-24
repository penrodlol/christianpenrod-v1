import { Anchor } from '@components/Anchor';
import { Card } from '@components/Card';
import { GridSurface } from '@components/GridSurface';
import { PageTitle } from '@components/PageTitle';
import { Spacer } from '@components/Spacer';
import { MAX } from '@const/breakpoints';
import { Project, Projects as _Projects } from '@interfaces/project';
import ArrowRight from '@svg/arrow-right.svg';
import Github from '@svg/github.svg';
import { hoverIcon } from '@utils/styles';
import { supabase } from '@utils/supabase';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import addSpacers from 'react-string-replace';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  max-width: var(--size-xl);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--size-8);
  padding-inline: var(--size-5);
  padding-block: var(--size-10);

  svg:hover {
    ${hoverIcon}
  }

  ${MAX.LG} {
    grid-auto-flow: row;
    grid-template-columns: none;
    gap: var(--size-10);
    max-width: var(--size-md);
    margin: 0 auto;
    padding-top: var(--size-7);
  }
`;

const CheckItOut = styled.span`
  display: flex;
  align-items: center;
  gap: var(--size-2);
  font-size: var(--font-size-2);
  border-radius: var(--radius-2);

  &:hover svg {
    ${hoverIcon()}
  }
`;

const Projects: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}) => {
  return (
    <>
      <GridSurface>
        <PageTitle page="Projects" title="What has Christian done?" />
        <ProjectsWrapper>
          {projects?.map((project) => (
            <Card
              key={project.id}
              banner={project.preview}
              title={project.title}
              tags={project.tags}
              description={addSpacers(project.description, '---', (_, i) => (
                <Spacer key={i} size={3} />
              ))}
              actions={[
                <Anchor
                  key={`${project.id} - github`}
                  href={project.github}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="Navigate externally to the project's github."
                >
                  <Github width={25} height={25} />
                </Anchor>,
                <Anchor
                  key={`${project.id} - external`}
                  href={project.hosted}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="Navigate externally to the project."
                >
                  <CheckItOut>
                    Check it out
                    <ArrowRight width={25} height={25} />
                  </CheckItOut>
                </Anchor>,
              ]}
            ></Card>
          ))}
        </ProjectsWrapper>
      </GridSurface>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  projects: _Projects;
}> = async () => {
  const { data, error } = await supabase.from<Project>('projects').select('*');
  const bucket = supabase.storage.from('projects');

  const payload = error || !data ? [] : data;

  const projects: _Projects = payload.map((project) => {
    const projectsBucket = bucket.getPublicUrl(project.preview);
    const preview = projectsBucket.data?.publicURL as string;

    return { ...project, preview };
  });

  return {
    props: { projects },
  };
};

export default Projects;
