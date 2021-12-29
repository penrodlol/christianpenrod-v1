import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { WebsiteProject } from '@components/WebsiteProject';
import { ProjectsDTO } from '@interfaces/project';
import { generateGridBackground } from '@utils/generate-grid-background';
import { useStaticData } from 'hooks/use-static-data';
import type { NextPage } from 'next';
import styled, { createGlobalStyle } from 'styled-components';

const Background = createGlobalStyle`
  body {
    ${generateGridBackground()};
  }
`;

const Wrapper = styled.main`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: 0 auto;
  padding: 2.2rem 1.5rem 0 1.5rem;
`;

const PageTitleWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
`;

const WebsiteProjectsWrapper = styled.div`
  display: grid;
  --tt-key: projects-website-projects-wrapper;

  @keyframes projects-website-projects-wrapper {
    0%,
    60% {
      gap: 2rem;
      margin-top: 0;
    }
    100% {
      gap: 8rem;
      margin-top: 4rem;
    }
  }
`;

const Projects: NextPage = () => {
  const page = 'Projects';
  const projects = useStaticData<ProjectsDTO>('api/projects');

  return (
    <>
      <PageHead page={page} />
      <Background />
      <Wrapper>
        <PageTitleWrapper>
          <PageTitle page={page} title="What has Christian done?" />
        </PageTitleWrapper>
        <WebsiteProjectsWrapper>
          {projects?.website.map((project) => (
            <WebsiteProject key={project.id} project={project} />
          ))}
        </WebsiteProjectsWrapper>
      </Wrapper>
    </>
  );
};

export default Projects;
