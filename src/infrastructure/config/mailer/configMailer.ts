import { createTransport } from 'nodemailer';
import { env } from '../env';

export const transporter = createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 465,
  secure: true,
  auth: {
    user: env.get('NODEMAILER_EMAIL'),
    pass: env.get('NODEMAILER_PASSWORD'),
  },
  tls: { rejectUnauthorized: false },
});
