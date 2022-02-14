import { MIN } from '@const/breakpoints';
import { Field, FieldProps, Form, Formik } from 'formik';
import { useToggle } from 'rooks';
import styled from 'styled-components';
import { Button } from './Button';
import { Dialog, DialogContent, DialogTrigger } from './Dialog';
import { Input } from './Input';
import { Textarea } from './Textarea';

const Fields = styled.div`
  display: grid;
  grid-template-rows: repeat(2, [row] auto);
  grid-row-gap: var(--font-size-5);

  ${MIN.SM} {
    grid-template-columns: repeat(2, [col] 1fr);
    grid-row-gap: var(--size-4);

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
  const [open, setOpen] = useToggle(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button color="cta" aria-label="Open contact form.">
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent
        title="Contact Me"
        closeAriaLabel="Cancel email submission."
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
          onSubmit={(_, actions) => {
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
