import { useState } from 'react';
import { Button } from './Button';
import { Dialog } from './Dialog';

export const ContactForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        status="cta"
        aria-label="Click to contact via email."
        style={{ width: '10rem' }}
        onClick={() => setOpen(!open)}
      >
        Contact
      </Button>
      <Dialog
        title="Contact Me"
        open={open}
        onClose={() => setOpen(false)}
      ></Dialog>
    </>
  );
};
