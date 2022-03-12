import { Email } from '@models/email';
import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') return res.status(400).json({});

    const payload: Email = JSON.parse(req.body);

    const message = {
      to: process.env.SENDGRID_EMAIL as string,
      from: process.env.SENDGRID_EMAIL as string,
      subject: payload.subject,
      html: `
        <p>Name: <strong>${payload.name}</strong></p>
        <p>Email: <strong>${payload.from}</strong></p>
        <hr />
        <p style="word-break: break-all;">${payload.message}</p>
      `,
    };

    sendgrid.setApiKey(process.env.SENDGRID_KEY as string);
    sendgrid.send(message);

    res.status(200).json({});
  } catch (e) {
    return res.status(500).json({});
  }
};
