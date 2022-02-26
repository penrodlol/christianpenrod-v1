import { Anchor } from '@components/Anchor';
import { Card } from '@components/Card';
import { GridSurface } from '@components/GridSurface';
import { PageTitle } from '@components/PageTitle';
import { MAX } from '@const/breakpoints';
import { HOVER_ICON } from '@const/mixins';
import { Project, Projects as _Projects } from '@interfaces/project';
import ArrowRight from '@svg/arrow-right.svg';
import Github from '@svg/github.svg';
import { supabase } from '@utils/supabase';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
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
    ${HOVER_ICON}
  }

  ${MAX.XL} {
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
    ${HOVER_ICON}
  }
`;

// prettier-ignore
const components = {
  Spacer: dynamic<unknown>(() => import('@components/Spacer').then((m) => m.Spacer)),
  Anchor: dynamic<unknown>(() => import('@components/Anchor').then((m) => m.Anchor)),
};

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
              description={
                <MDXRemote {...project.description} components={components} />
              }
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
  projects: _Projects<MDXRemoteSerializeResult>;
}> = async () => {
  const { data, error } = await supabase.from<Project>('projects').select('*');
  const bucket = supabase.storage.from('projects');

  const payload = error || !data ? [] : data;

  const projects = await Promise.all(
    payload.map(async (project) => {
      const projectsBucket = bucket.getPublicUrl(project.preview);
      const preview = projectsBucket.data?.publicURL as string;
      const description = await serialize(project.description);

      return {
        ...project,
        description,
        preview,
      } as Project<MDXRemoteSerializeResult>;
    }),
  );

  return {
    props: { projects },
  };
};

export default Projects;
