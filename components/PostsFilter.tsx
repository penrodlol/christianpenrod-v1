import Close from '@svg/close.svg';
import Search from '@svg/search.svg';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FC } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export interface PostsFilterProps {
  onFilter: (value: string | null) => void;
}

export const PostsFilter: FC<PostsFilterProps> = ({ onFilter }) => {
  return (
    <Formik
      initialValues={{ value: '' }}
      onSubmit={({ value }) => {
        value = value.trim();
        onFilter(value.length > 0 ? value : null);
      }}
      onReset={() => onFilter(null)}
    >
      {({ handleSubmit, handleReset }) => (
        <Form onChange={handleSubmit} onReset={handleReset}>
          <Field name="value">
            {({ field }: FieldProps) => (
              <Input
                type="text"
                placeholder="Search title or tags"
                aria-label="Filter posts by title or tags."
                submitIcon={
                  <Button asIcon type="submit" aria-label="Submit search.">
                    <Search width={20} height={20} />
                  </Button>
                }
                resetIcon={
                  <Button asIcon type="reset" aria-label="Reset search.">
                    <Close width={20} height={20} />
                  </Button>
                }
                {...field}
              />
            )}
          </Field>
        </Form>
      )}
    </Formik>
  );
};
