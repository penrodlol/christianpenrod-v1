import { FC, FormEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './Button';

const Wrapper = styled.div(
  ({ theme }) => css`
    max-width: ${theme.breakpoint.sm};
    margin: 0 auto;

    @media screen and (max-width: ${theme.breakpoint.lg}) {
      max-width: ${theme.breakpoint.xs};
    }
  `,
);

const InnerWrapper = styled.form(
  ({ theme }) => css`
    max-width: ${theme.breakpoint.xs};
    background: ${theme.background.light};
    border: solid 0.1rem ${theme.background.heavy};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    caret-color: ${theme.primary.base};
    padding: 0.5rem 0.75rem;
    display: grid;
    grid-template-columns: auto repeat(3, max-content);
    align-items: center;
    margin: 0 1rem;

    svg:last-child {
      margin-left: 0.8rem;
    }
  `,
);

const Filter = styled.input(
  ({ theme }) => css`
    color: ${theme.text.base};
    background: transparent;
    border: none;
    outline: none;
    margin-right: 0.8rem;
    min-width: 0;
    --tt-key: posts-filter-input;

    /* prettier-ignore */
    @keyframes posts-filter-input {
      0% { font-size: 1em; }
      100% { font-size: 1.25em; }
    }
  `,
);

export interface PostsFilterProps {
  onFilter: (value: string | null) => void;
}

export const PostsFilter: FC<PostsFilterProps> = ({ onFilter }) => {
  const [dirty, setDirty] = useState(false);

  function filterPosts(e: FormEvent<HTMLFormElement>) {
    switch (e.type) {
      case 'submit': {
        e.preventDefault();
        break;
      }
      case 'reset': {
        setDirty(false);
        onFilter(null);
        break;
      }
      default: {
        const filter = e.currentTarget.filter as HTMLInputElement;
        const value = filter.value.toLowerCase().trim();
        const state = value?.length > 0 ? value : null;

        setDirty(state != null);
        onFilter(value?.length > 0 ? value : null);
        break;
      }
    }
  }

  return (
    <Wrapper>
      <InnerWrapper
        onSubmit={filterPosts}
        onChange={filterPosts}
        onReset={filterPosts}
      >
        <Filter
          name="filter"
          type="text"
          placeholder="Search title or tags"
          aria-label="Filter posts by title or tags."
        />
        <Button
          icon="search"
          iconSize={20}
          type="submit"
          aria-label="Click to search posts."
        />
        {dirty && (
          <Button
            icon="close"
            iconSize={20}
            type="reset"
            aria-label="Click to clear posts search."
          />
        )}
      </InnerWrapper>
    </Wrapper>
  );
};
