import { projectsSelector, projectsState } from '@atoms/projects';
import { GridBackground } from '@components/GridBackground';
import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { ProjectOverview } from '@components/ProjectOverview';
import { MAX, MIN, SIZE } from '@const/breakpoints';
import { Project } from '@interfaces/project';
import { supabase } from '@utils/supabase';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

const WebsiteProjects = styled.section`
  max-width: ${SIZE.LG};
  display: grid;
  margin: 0 auto;
  --tt-key: projects-website-projects;

  @keyframes projects-website-projects {
    0%,
    60% {
      gap: var(--size-7);
      padding-inline: var(--size-3);
      padding-bottom: var(--size-7);
    }
    100% {
      gap: var(--size-12);
      padding-inline: var(--size-5);
      padding-block: var(--size-9);
    }
  }
`;

const MiscProjectsWrapper = styled.div`
  background: var(--surface2);
`;

const MiscProjects = styled.section`
  max-width: ${SIZE.LG};
  padding: var(--size-5);
  --tt-key: projects-misc-projects;

  /* prettier-ignore */
  @keyframes projects-misc-projects {
    0%, 40% { margin: var(--size-3) auto; }
    100% { margin: var(--size-7) auto; }
  }

  ${MAX.LG} {
    max-width: ${SIZE.XS};
  }
`;

const MiscProjectsTitle = styled.h3`
  color: var(--text2);
  margin-bottom: var(--size-5);
  font-size: var(--font-size-4);
`;

const MiscProjectsContent = styled.div`
  display: grid;
  gap: var(--size-8);
  justify-content: center;

  ${MIN.LG} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 1fr;
  }
`;

const Projects: NextPage = () => {
  const [projects, setProjects] = useRecoilState(projectsState);
  const { website, misc } = useRecoilValue(projectsSelector);

  useEffect(() => {
    if (projects) return;

    supabase
      .from<Project>('projects')
      .select('*, tools(*)')
      .then(({ data }) => setProjects(data));
  }, [projects, setProjects]);

  return (
    <>
      <PageHead page="Projects" />
      <main>
        <GridBackground>
          <PageTitle page="Projects" title="What has Christian done?" />
          <WebsiteProjects>
            {website?.map((project) => (
              <ProjectOverview key={project.id} project={project} />
            ))}
          </WebsiteProjects>
          <MiscProjectsWrapper>
            <MiscProjects>
              <MiscProjectsTitle>Other Projects</MiscProjectsTitle>
              <MiscProjectsContent>
                {misc?.map((project) => (
                  <ProjectOverview key={project.id} project={project} />
                ))}
              </MiscProjectsContent>
            </MiscProjects>
          </MiscProjectsWrapper>
        </GridBackground>
      </main>
    </>
  );
};

export default Projects;
