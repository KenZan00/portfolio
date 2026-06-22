export async function contactApi(contactData: { email: string; message: string }) {
    const result = await fetch('/api/contact-me', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
    });

    if (!result.ok) {
        throw new Error('Failed to send contact message');
    }

    return result.json();
}