import { Email } from '@interfaces/email';
import { sendgrid } from '@utils/sendgrid';
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') return res.status(400).json({});

    const payload: Email = JSON.parse(req.body);

    const message = {
      to: process.env.NEXT_PUBLIC_SENDGRID_EMAIL as string,
      from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL as string,
      subject: payload.subject,
      html: `
        <p>Name: <strong>${payload.name}</strong></p>
        <p>Email: <strong>${payload.from}</strong></p>
        <hr />
        <p style="word-break: break-all;">${payload.message}</p>
      `,
    };

    await sendgrid.send(message);

    res.status(200).json({});
  } catch (e) {
    return res.status(500).json({});
  }
};
