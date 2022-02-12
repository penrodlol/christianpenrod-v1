import { Anchor } from '@components/Anchor';
import { Card } from '@components/Card';
import { GridSurface } from '@components/GridSurface';
import { PageTitle } from '@components/PageTitle';
import { MAX, SIZE } from '@const/breakpoints';
import { Project, Projects as _Projects } from '@interfaces/project';
import ArrowRight from '@svg/arrow-right.svg';
import Github from '@svg/github.svg';
import { supabase } from '@utils/supabase';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  max-width: ${SIZE.XL};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--size-8);
  padding-inline: var(--size-5);
  padding-block: var(--size-10);

  ${MAX.MD} {
    grid-auto-flow: row;
    grid-template-columns: none;
    max-width: ${SIZE.XS};
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
              description={project.description}
              actions={[
                <Anchor
                  key={`${project.id} - github`}
                  href={project.github}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <Github width={25} height={25} />
                </Anchor>,
                <Anchor
                  key={`${project.id} - external`}
                  href={project.hosted}
                  target="_blank"
                  rel="nofollow noreferrer"
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
    const { data } = bucket.getPublicUrl(project.preview);
    return { ...project, preview: data?.publicURL as string };
  });

  return {
    props: { projects },
  };
};

export default Projects;
