import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.API_KEY_RESEND);

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, message } = req.body;

    console.log('Server received:', { email, message });

    const { data, error } = await resend.emails.send({
        from: 'Portfolio <no-reply@akerup.se>',
        to: process.env.MY_EMAIL!,
        subject: 'Message from portfolio contact form',
        replyTo: email,
        text: message,
    });

    if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }

    console.log({ data });

    return res.status(200).json({ ok: true });
}