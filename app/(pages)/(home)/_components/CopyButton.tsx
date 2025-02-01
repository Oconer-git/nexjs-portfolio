'use client';
import { PropsWithChildren } from 'react';
import toast from 'react-hot-toast';

const CopyButton = ({ children }: PropsWithChildren) => {
    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
        const text = e.currentTarget.textContent || ''; // Get the button's text content

        navigator.clipboard.writeText(text).then(
            () => {
                console.log('Text copied to clipboard:', text);
                toast(`Text copied to clipboard: ${text}`, {
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite'
                    },
                    removeDelay: 1000
                });
            },
            (err) => {
                console.error('Failed to copy text:', err);
            }
        );
    };

    return (
        <button
            onClick={handleCopy}
            className="flex h-[2.5rem] w-fit flex-col items-center justify-center rounded-[0.5rem] border-slate-200 bg-slate-200 px-[1rem] py-[0.1rem] text-[1.2rem] text-gray-600 shadow-xl hover:scale-95 sm:h-[3.5rem] sm:py-[1rem] sm:text-[1.5rem]"
        >
            {children}
        </button>
    );
};

export default CopyButton;
