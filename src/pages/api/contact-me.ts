import { Resend } from 'resend';

const apiKeyResend = import.meta.env.API_KEY_RESEND
const resend = new Resend(apiKeyResend);

export async function POST({ request }: { request: Request }) {
    const { email, message } = await request.json();
    console.log('Server received:', { email, message });

    const {data, error} = await resend.emails.send({
        from: "Portfolio <no-reply@akerup.se>",
        to: import.meta.env.MY_EMAIL,
        subject: "Message from portfolio contact form",
        replyTo: email,
        text: message,
    });

    if (error) {
        console.error('Error sending email:', error);
        return new Response("Not ok", {status: 500});
    }

    console.log({ data });
    return Response.json({ ok: true });
}