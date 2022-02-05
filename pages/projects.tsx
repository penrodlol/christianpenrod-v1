import { Anchor } from '@components/Anchor';
import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { GridSurface } from '@components/GridSurface';
import { Media } from '@components/Media';
import { PageHead } from '@components/PageHead';
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
  }
`;

const Projects: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}) => {
  return (
    <>
      <PageHead page="Projects" />
      <main>
        <GridSurface>
          <Media greaterThanOrEqual="xs">
            <PageTitle page="Projects" title="What has Christian done?" />
          </Media>
          <ProjectsWrapper>
            {projects?.map((project) => (
              <Card
                key={project.id}
                banner="/img/devices.webp"
                title={project.title}
                tags={project.tags}
                description={project.description}
                actions={[
                  <Anchor
                    key={`${project.id} - github`}
                    href={project.github}
                    target="_blank"
                  >
                    <Button asIcon>
                      <Github width={25} height={25} />
                    </Button>
                  </Anchor>,
                  <Anchor
                    key={`${project.id} - external`}
                    href={project.hosted}
                    target="_blank"
                  >
                    <Button color="basic">
                      Check it out
                      <ArrowRight width={25} height={25} />
                    </Button>
                  </Anchor>,
                ]}
              ></Card>
            ))}
          </ProjectsWrapper>
        </GridSurface>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  projects: _Projects;
}> = async () => {
  const { data, error } = await supabase.from<Project>('projects').select('*');

  const projects = error || !data ? [] : data;

  return {
    props: { projects },
  };
};

export default Projects;
