import { useState } from 'react';
import { Button } from './Button';

export const ContactForm = () => {
  const [open, setOpen] = useState(false);

  function submitEmail() {
    setOpen(false);
  }

  return (
    <>
      <Button
        type="button"
        status="cta"
        aria-label="Click to contact via email."
        onClick={() => setOpen(true)}
      >
        Contact
      </Button>
      {/* <Dialog
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
      ></Dialog> */}
    </>
  );
};
