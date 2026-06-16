import { Resend } from 'resend';

const apiKeyResend = import.meta.env.API_KEY_RESEND
const resend = new Resend(apiKeyResend);

export async function POST({ request }: { request: Request }) {
    const data = await request.formData();
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    await resend.emails.send({
        from: "My portfolio <onboarding@resend.dev>",
        to: import.meta.env.MY_EMAIL,
        subject: "Message from portfolio contact form",
        replyTo: email,
        text: message,
    });
}