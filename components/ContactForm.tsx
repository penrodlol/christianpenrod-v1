import { Button } from './Button';
import { Dialog, DialogContent, DialogTrigger } from './Dialog';

export const ContactForm = () => {
  return (
    <Dialog>
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
          aria: 'Submit email',
          disabled: true,
        }}
      ></DialogContent>
    </Dialog>
  );
};
