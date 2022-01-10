import { Field, FieldProps, Form, Formik } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Dialog, DialogContent, DialogTrigger } from './Dialog';
import { Input } from './Input';
import { Textarea } from './Textarea';

const Fields = styled.div`
  display: grid;
  grid-template-rows: repeat(2, [row] auto);
  grid-row-gap: 1.75rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(2, [col] 50%);
    grid-row-gap: 1.25rem;

    > {
      &:nth-child(1) {
        grid-column: col / span 1;
        grid-row: row;
      }

      &:nth-child(2) {
        grid-column: col 2 / span 1;
        grid-row: row;
      }

      &:nth-child(3) {
        grid-column: col / span 2;
        grid-row: row 2;
      }

      &:nth-child(4) {
        grid-column: col / span 2;
        grid-row: row 3;
        margin-top: -1rem;
      }
    }
  }
`;

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initial: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          status="cta"
          aria-label="Click to contact via email."
        >
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent
        title="Contact Me"
        primary={{
          label: 'Send Message',
          title: 'Send Message',
          disabled: false,
          type: 'submit',
          form: 'contact-form',
          'aria-label': 'Submit email',
        }}
      >
        <Formik<ContactForm>
          initialValues={initial}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            actions.setSubmitting(false);
            actions.resetForm({ values: initial });
            setOpen(false);
          }}
        >
          <Form id="contact-form">
            <Fields>
              <Field name="name" required>
                {({ field }: FieldProps) => (
                  <Input
                    placeholder="Name"
                    type="text"
                    aria-label="Enter your name used to contact me."
                    resetAriaLabel="Clear name used to contact me."
                    required
                    {...field}
                  />
                )}
              </Field>
              <Field name="email" required>
                {({ field }: FieldProps) => (
                  <Input
                    placeholder="Email"
                    type="email"
                    aria-label="Enter your email used to contact me."
                    resetAriaLabel="Clear email used to contact me."
                    required
                    {...field}
                  />
                )}
              </Field>
              <Field name="subject" required>
                {({ field }: FieldProps) => (
                  <Input
                    placeholder="Subject"
                    type="text"
                    aria-label="Enter contact message subject."
                    resetAriaLabel="Clear contact message subject."
                    required
                    {...field}
                  />
                )}
              </Field>
              <Field name="message" required>
                {({ field }: FieldProps) => (
                  <Textarea
                    placeholder="Message"
                    aria-label="Enter contact message."
                    rows={7}
                    required
                    disableResize
                    {...field}
                  />
                )}
              </Field>
            </Fields>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  );
};
