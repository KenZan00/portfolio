<script>
import { contactApi } from '../utils/contact.ts';

    let email = '';
    let message = '';
    let status = '';

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            email,
            message
        };

        try {
            const res = await contactApi(formData);
            if (res.ok) {
                status = 'success';
            }

            console.log('Contact message sent successfully');
        } catch (error) {
            console.error('Error sending contact message:', error);
            status = 'error';
        }

        // console.log('Email:', email);
        // console.log('Message:', message);
        email = '';
        message = '';
    }

    $: if (status === 'success') {
        const timer = setTimeout(() => {
            status = '';
        }, 5000);
    }

</script>

<form class="flex flex-col gap-4 max-w-md mx-auto" on:submit={handleSubmit}>
    <label for="email">Email:</label>
    <input
    type="email"
    id="email"
    bind:value={email}
    required
    class="w-full p-3 rounded-md border border-ibm-gray focus:border-ibm-blue focus:ring-2 focus:ring-ibm-blue/30 
    outline-none transition-all"
    />

    <label for="message">Meddelande:</label>
    <textarea
        id="message"
        bind:value={message}
        required
        class="w-full min-h-40 resize-y p-3 rounded-md border border-ibm-gray focus:border-ibm-blue focus:ring-2 focus:ring-ibm-blue/30 
        outline-none transition-all"
    ></textarea>

    <button
        type="submit"
        class="flex items-center justify-center px-6 py-3 min-w-40 
        bg-ibm-blue text-white rounded-md cursor-pointer
        transition-all duration-200 ease-out
        hover:bg-ibm-cyan hover:text-slate-800
        focus:outline-none focus:ring-2 focus:ring-ibm-blue focus:ring-offset-2"
    >
        Skicka meddelande
    </button>

</form>

{#if status === 'success'}
    <p class="text-green-600 mt-4">Meddelandet skickades framgångsrikt!</p>
{/if}
{#if status === 'error'}
    <p class="text-red-600 mt-4">Ett fel uppstod när meddelandet skickades.</p>
{/if}