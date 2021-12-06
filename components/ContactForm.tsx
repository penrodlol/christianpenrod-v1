import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Dialog } from './Dialog';

const Wrapper = styled.div`
  --tt-key: contact-form-wrapper;

  .contact-trigger {
    width: 100%;
  }

  /* prettier-ignore */
  @keyframes contact-form-wrapper {
    0%, 80% { width: 100%; }
    100% { width: 10rem; }
  }
`;

export const ContactForm = () => {
  const [open, setOpen] = useState(false);

  function submitEmail() {
    setOpen(false);
  }

  return (
    <Wrapper>
      <Button
        className="contact-trigger"
        type="button"
        status="cta"
        aria-label="Click to contact via email."
        onClick={() => setOpen(true)}
      >
        Contact
      </Button>
      <Dialog
        title="Contact Me"
        closeAria="Cancel email submission"
        primary={{
          label: 'Send Message',
          aria: 'Submit email',
          disabled: true,
        }}
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={submitEmail}
      ></Dialog>
    </Wrapper>
  );
};
