import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { ProjectOverview } from '@components/ProjectOverview';
import { ProjectsDTO } from '@interfaces/project';
import { generateGridBackground } from '@utils/generate-grid-background';
import { useStaticData } from 'hooks/use-static-data';
import type { NextPage } from 'next';
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

const Projects: NextPage = () => {
  const page = 'Projects';
  const projects = useStaticData<ProjectsDTO>('api/projects');

  return (
    <>
      <PageHead page={page} />
      <main>
        <GridBackgroundWrapper>
          <PageTitleWrapper>
            <PageTitle page={page} title="What has Christian done?" />
          </PageTitleWrapper>
          <WebsiteProjectsWrapper>
            {projects?.website?.map((project) => (
              <ProjectOverview key={project.id} project={project} />
            ))}
          </WebsiteProjectsWrapper>
        </GridBackgroundWrapper>

        <MiscProjectsWrapper>
          <MiscProjectsTitle>Other Projects</MiscProjectsTitle>
          <MiscProjectsContent>
            {projects?.misc?.map((project) => (
              <ProjectOverview key={project.id} project={project} />
            ))}
          </MiscProjectsContent>
        </MiscProjectsWrapper>
      </main>
      <FooterStyles />
    </>
  );
};

export default Projects;
