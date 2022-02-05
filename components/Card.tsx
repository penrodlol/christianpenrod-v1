import Image from 'next/image';
import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { Chip } from './Chip';
import { Divider } from './Divider';

const Wrapper = styled.div<CardProps>(({ actions }) => {
  const hoverStyles = css`
    &:hover {
      box-shadow: var(--shadow-5);
    }
  `;

  return css`
    background: var(--surface-3);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-4);
    padding: var(--size-4);
    cursor: pointer;
    display: grid;

    ${actions?.length !== 2 && hoverStyles}
  `;
});

const Banner = styled.div`
  position: relative;
  height: var(--size-12);
  margin-top: calc(var(--size-3) * -1);
  margin-bottom: var(--size-3);
  margin-inline: calc(var(--size-3) * -1);

  img {
    border-top-left-radius: var(--radius-2);
    border-top-right-radius: var(--radius-2);
  }
`;

const Title = styled.h3`
  --tt-key: card-title;

  /* prettier-ignore */
  @keyframes card-title {
    0%, 60% { font-size: var(--font-size-3); }
    100% { font-size: var(--font-size-4); }
  }
`;

const Subheader = styled.span`
  color: var(--text-2);
  display: block;
`;

const Tags = styled.div`
  font-size: var(--font-size-0);
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-2);
  margin-bottom: var(--size-2);
`;

const Description = styled.p`
  font-size: var(--font-size-1);
  line-height: var(--font-lineheight-4);
`;

const Actions = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: var(--size-2);
  align-items: center;
  margin-top: var(--size-4);

  > :last-child {
    justify-self: end;
  }
`;

export interface CardProps {
  title: string;
  description: string;
  subheader?: string;
  tags?: Array<string>;
  banner?: string;
  actions?: Array<ReactElement<HTMLElement>>;
}

export const Card: FC<CardProps> = (props) => (
  <Wrapper {...props}>
    {props.banner && (
      <Banner>
        <Image
          src={props.banner}
          alt="Preview"
          placeholder="blur"
          blurDataURL={props.banner}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Banner>
    )}
    <div>
      {props.tags && (
        <Tags>
          {props.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </Tags>
      )}
      <Title>{props.title}</Title>
      {props.subheader && <Subheader>{props.subheader}</Subheader>}
      <Divider />
    </div>
    <Description>{props.description}</Description>
    {props.actions && <Actions>{props.actions}</Actions>}
  </Wrapper>
);
