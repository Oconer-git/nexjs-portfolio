import toast from 'react-hot-toast';
import z from 'zod';
import { formSchema } from '../(pages)/(home)/_components/ContactForm';

export function sendEmail(data: z.infer<typeof formSchema>) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((response) => {
            toast.success(`Success. ${response.message}`, {
                icon: '✅'
            });
        })
        .catch((err) => {
            toast.success(`Error. ${err.message}`, {
                icon: '⭕'
            });
        });
}
