import { cn } from '@/lib/utils';
import * as React from 'react';

interface TextareaProps extends React.ComponentProps<'textarea'> {
    placeholder: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, id, name, placeholder, ...props }, ref) => {
        const [rows, setRows] = React.useState(3);
        const maxRows = 10;

        const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const textarea = e.target;
            const lineHeight = 24;
            const currentRows = Math.floor(textarea.scrollHeight / lineHeight);

            if (currentRows >= maxRows) {
                textarea.rows = maxRows;
            } else {
                textarea.rows = currentRows;
            }

            setRows(currentRows);
        };

        return (
            <div className="relative">
                <textarea
                    id={id}
                    name={name}
                    ref={ref}
                    className={cn(
                        'bg-gray peer w-full resize-none rounded-md border-[0.2rem] px-[1.6rem] pt-[2.5rem] text-[1.6rem] !leading-[2.4rem] text-text placeholder:text-transparent focus:outline-[0.1rem] focus:outline-primary',
                        className
                    )}
                    placeholder={placeholder}
                    rows={rows}
                    onInput={handleInput}
                    {...props}
                />
                <label
                    htmlFor={id}
                    className={cn(
                        'bg-gray absolute left-0 z-10 ml-1 w-11/12 translate-x-[1.3rem] translate-y-[0.25rem] pt-[0.3rem] text-text/[78%] duration-100 ease-linear peer-placeholder-shown:translate-y-[0.5rem] peer-placeholder-shown:text-[1.6rem] peer-focus:translate-y-[0.1rem] peer-focus:text-[1rem]'
                    )}
                >
                    {placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}
                </label>
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export { Textarea };
