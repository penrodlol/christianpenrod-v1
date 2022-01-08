import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { ProjectOverview } from '@components/ProjectOverview';
import { Project, Projects as _Projects, Tag } from '@interfaces/project';
import { generateGridBackground } from '@utils/generate-grid-background';
import { supabase } from '@utils/supabase';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import styled, { createGlobalStyle, css } from 'styled-components';

const FooterStyles = createGlobalStyle(
  ({ theme }) => css`
    footer {
      background: ${theme.background.light};
      border-top: solid 0.1rem ${theme.background.heavy};
      padding-top: 2rem !important;
    }
  `,
);

const GridBackgroundWrapper = styled.div`
  border-bottom: solid 0.1rem ${({ theme }) => theme.background.heavy};
  ${generateGridBackground()};
`;

const PageTitleWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  padding: 2.2rem 1.5rem 0 1.5rem;
`;

const WebsiteProjectsWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  display: grid;
  margin: 0 auto;
  --tt-key: projects-website-projects-wrapper;

  @keyframes projects-website-projects-wrapper {
    0%,
    60% {
      gap: 2rem;
      padding: 0 1rem 2.2rem 1rem;
    }
    100% {
      gap: 9rem;
      padding: 4rem 1.5rem;
    }
  }
`;

const MiscProjectsWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  padding: 1.5rem;
  --tt-key: projects-misc-projects-wrapper;

  /* prettier-ignore */
  @keyframes projects-misc-projects-wrapper {
    0%, 40% { margin: 1rem auto; }
    100% { margin: 2rem auto; }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    max-width: ${({ theme }) => theme.breakpoint.xs};
  }
`;

const MiscProjectsTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.7em;
`;

const MiscProjectsContent = styled.div`
  display: grid;
  gap: 3rem;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 1fr;
  }
`;

type ProjectsState = Record<Tag, _Projects | undefined> | null;

const Projects: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}) => {
  const page = 'Projects';

  return (
    <>
      <PageHead page={page} />
      <main>
        <GridBackgroundWrapper>
          <PageTitleWrapper>
            <PageTitle page={page} title="What has Christian done?" />
          </PageTitleWrapper>
          <WebsiteProjectsWrapper>
            {projects?.WEBSITE?.map((project) => (
              <ProjectOverview key={project.id} project={project} />
            ))}
          </WebsiteProjectsWrapper>
        </GridBackgroundWrapper>

        <MiscProjectsWrapper>
          <MiscProjectsTitle>Other Projects</MiscProjectsTitle>
          <MiscProjectsContent>
            {projects?.MISC?.map((project) => (
              <ProjectOverview key={project.id} project={project} />
            ))}
          </MiscProjectsContent>
        </MiscProjectsWrapper>
      </main>
      <FooterStyles />
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  projects: ProjectsState;
}> = async () => {
  const { data } = await supabase
    .from<Project>('projects')
    .select('*, tools(*)');

  const projects = {
    WEBSITE: data?.filter(({ tag }) => tag === 'WEBSITE'),
    MISC: data?.filter(({ tag }) => tag === 'MISC'),
  };

  return { props: { projects } };
};

export default Projects;
